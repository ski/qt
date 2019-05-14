import React, { Component } from "react";
import './App.css';

class Languages extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {sel} = this.props;
        
        return(
            <div>
            <ul id="buttons">
                {this.rone(sel)}
            </ul>
            <ul id="buttonss">
                {this.rtwo(sel)}
            </ul>            
            </div>            
        );
    }

    rone = (sel) => {        
        let rowone = [];
        let one = ["English", "Français", "中文",'हिन्दी', 'Español', 'русский'];
        for (let i = 0; i < 3; i++) {
            if(sel == i){                
                rowone.push(<li id='selected'><a href="#">{one[i]}</a></li>);
            } else {
                rowone.push(<li><a href="#">{one[i]}</a></li>);
            }
        }
        return rowone;
    }

    rtwo = (sel) =>{
        let rowtwo = [];
        let two = ["English", "Français", "中文",'हिन्दी', 'Español', 'русский'];

        for (let i = 3; i < 6; i++) {
            console.log(sel == i);
            if(sel == i){                
                rowtwo.push(<li id='selected'><a href="#">{two[i]}</a></li>);
            } else {
                rowtwo.push(<li><a href="#">{two[i]}</a></li>);
            }            
        }
        return rowtwo;
    }
}

export default Languages;