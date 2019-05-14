
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';
import Languages from './Languages';
import Verses from './Verses';
import Fonts from './Fonts';
import Frames from './Frames';
import Review from "./Review";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      response: {two:'c21', sel: 0},
      ttwo: 'c21',
      esel : '0',
      elang: 4,
      everse: 2,
      endpoint: "http://127.0.0.1:3002"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    var t = this;
    socket.on('to', function(data){
      t.setState({ ttwo: data.dtwo, esel: data.esel });
    });

    socket.on('three', function(data){
      console.log(data);
      t.setState({ ttwo: data.dtwo, elang: data.elang, everse: data.everse });
    });

    socket.on('four', function(data){
      console.log(data);
      t.setState({ ttwo: data.dtwo,esel: data.esel});
    });

    socket.on('five', function(data){
      console.log(data);
      t.setState({ ttwo: data.dtwo,esel: data.esel});
    });

    socket.on('six', function(data){
      console.log(data);
      t.setState({ ttwo: data.dtwo});
    });
  }

  render() {
    const { ttwo, esel, elang, everse } = this.state;    
    return (    
    <div className={ttwo}>
      {(function() {
        switch(ttwo) {
          case 'c22':
            return <Languages esel={esel}/>;
          case 'c23':
            return <Verses lang={elang} verse={everse}/>;              
          case 'c24':
            return <Fonts esel={esel}/>;   
          case 'c25':
            return <Frames esel={esel}/>; 
          case 'c26':
            return <Review />; 
          default:
            return <h2>Loading {ttwo}</h2>;
        }
      })()}
    </div>    
    );
  }
}
export default App;