
import React, { Component } from "react";
import './App.css';
import v0 from "./images/v0.png";
import v1 from "./images/v1.png";
import v2 from "./images/v2.png";
import v3 from "./images/v3.png";

class Fonts extends Component {

    rone = (sel) => {        
        let row = [];
        let one = [{v0}, {v1}];
        for (let i = 0; i < one.length; i++) {
            if(sel == i){                
                row.push(<img id='selected' src={one[i]['v'+i]} />);
            } else {
                row.push(<img src={one[i]['v'+i]} />);
            }
        }
        return row;
    }

    rtwo = (sel) => {
        let row = [];
        let one = [{v2}, {v3}];
        console.log(one); 
        for (let i = 2; i < 4; i++) {  
            console.log(i); 
            if(sel == i){                
                row.push(<img id='selected' src={one[i-2]['v'+i]} />);
            } else {
                row.push(<img src={one[i-2]['v'+i]} />);
            }
        }
        return row;
    }

    render() {
        const {esel} = this.props;
        
        return(<div className="row">
            <div className="column">
                {this.rone(esel)}
            </div>
            <div className="column">
                {this.rtwo(esel)}
            </div>
        </div>    
    );
    }
}

export default Fonts;