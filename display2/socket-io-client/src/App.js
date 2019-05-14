
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';
import Languages from './Languages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: {two:'c21', sel: 0},
      ttwo: 'c21',
      esel : '0',
      endpoint: "http://127.0.0.1:3002"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    var t = this;
    socket.on('to', function(data){
      t.setState({ ttwo: data.dtwo, esel: data.esel });
      console.log(data);
      console.log(t.state);
    });
    //socket.on("to", data => this.setState({ two: data.dtwo, sel: data.esel }));
  }

  render() {
    // console.log(this.state.response);
    const { ttwo, esel } = this.state;
    
    console.log(this.state);
    return (
      <div className={ttwo} style={{ textAlign: "center" }}>       
      <div className="area" ></div>   
    {ttwo == 'c22' ? <Languages sel={esel}/> : <h2>Loading {ttwo}</h2>}     
    {/* <ul id="buttons">
  <li><a href="#">English</a></li>
  <li id='selected'><a href="#">Français</a></li>
  <li ><a href="#">中文</a></li>
</ul>   
<ul id="buttonss">
  
  <li><a href="#">हिन्दी</a></li>
  <li><a href="#">Español</a></li>
  <li><a href="#">русский</a></li>

</ul>    */}
          {/* {response
          ? <div>
            The temperature in Florence is: {response} °F
            
              </div>
          : <div>Loading...</div>} */}
      </div>
    );
  }
}
export default App;