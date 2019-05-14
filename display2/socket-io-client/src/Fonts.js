
import React, { Component } from "react";
import './App.css';
import v0 from "./images/v0.png";
import v1 from "./images/v1.png";
import v2 from "./images/v2.png";
import v3 from "./images/v3.png";

class Fonts extends Component {

    render() {
        return(<div className="row">
            <div className="column">
                <img src={v0} />
                <img id='selected' src={v1} />
            </div>
            <div className="column">
                <img src={v2} />
                <img src={v3} />
            </div>
        </div>
    //     <ul id='fonts'>
    // <li><img src={v0} /></li>
    // <li><img src={v1} /></li>
    // <li><img src={v2} /></li>
    // <li><img src={v3} /></li>
    // </ul>
    // </div>
    );
    }
}

export default Fonts;