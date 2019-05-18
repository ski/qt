import React, { Component } from "react";
import './App.css';

//lang,verse,font,frame
class Frame extends Component {


    render(){
        const {lang,verse,font,sel} = this.props;
        console.log(this.props);
        var url = './images/' + lang + '/' + verse + '/' + font + '/' + sel + '.jpg';
        console.log(url);
        return(
<div>
    <img className='art' src={require("" + url)} />
  </div>
        );
    }
}

export default Frame;