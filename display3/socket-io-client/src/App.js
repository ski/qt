import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';
import Verses from './Verses'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: {two:'c21', sel: 0},
      dthree: 'c31',
      esel : '0',
      elang: 4,
      everse: 2,
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
  }

  render() {
    
    const { dthree, esel, elang, everse } = this.state;  
    console.log(elang);  
    return (    
    <div className={dthree}>
      {(function() {
        switch(dthree) {          
          case 'c33':
            return <Verses lang={elang} verse={everse}/>;    
          case 'c34':
            return <h4>c34</h4>;
          case 'c35':
            return <span>c35</span>; 
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
