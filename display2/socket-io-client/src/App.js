
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:3002"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("to", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;

    return (
      <div className={response} style={{ textAlign: "center" }}>                
          {response
          ? <p>
            The temperature in Florence is: {response} °F
              </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;