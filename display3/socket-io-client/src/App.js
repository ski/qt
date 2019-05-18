import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';
import Verses from './Verses';
import Font from './Font';
import Frame from './Frame';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: {two:'c21', sel: 0},
      dthree: 'c31',
      esel : '1',
      elang: 4,
      everse: 2,
      eframe: 0,
      endpoint: "http://127.0.0.1:3005"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    var t = this;
    socket.on('to', function(data){
      console.log(data);
      t.setState({ dthree: data.dthree, esel: data.esel });
    });

    socket.on('three', function(data){
      console.log(data);
      t.setState({ dthree: data.dthree, elang: data.elang, everse: data.everse });
    });

    socket.on('four', function(data){
      console.log(data);
      t.setState({ dthree: data.dthree, elang: data.elang, esel: data.esel, everse: data.everse });
    });

    socket.on('five', function(data){
      console.log(data);
      t.setState({ dthree: data.dthree, elang: data.elang, everse: data.everse, efont: data.efont, esel: data.eframe  });
    });
  }

  render() {
    //lang/verse/font/frame
    const { dthree, esel, elang, efont, everse } = this.state;  
    // console.log(this.state);  
    return (    
    <div className={dthree}>
      {(function() {
        switch(dthree) {          
          case 'c33':
            return <Verses lang={elang} verse={everse}/>;  
          case 'c34':
            return <Font lang={elang} verse={everse} sel={esel} />;  
          case 'c35':
            return <Frame lang={elang} verse={everse} font={efont} sel={esel} /> ; 
          case 'c36':
            return <span>c36</span>;
          default:
            return <span>c32</span>;
        }
      })()}
    </div>    
    );
  }
}

export default App;
