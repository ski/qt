
import React, { Component } from "react";
import './App.css';
import f0 from "./images/f0.png";
import f1 from "./images/f1.png";
import f2 from "./images/f2.png";
import f3 from "./images/f3.png";

class Frames extends Component {

    render() {
        return(<div className="row">
            <div className="column">
                <img src={f0} />
                <img src={f1} />
            </div>
            <div className="column">
                <img id='selected' src={f2} />
                <img src={f3} />
            </div>
        </div>
    );
    }
}

export default Frames;