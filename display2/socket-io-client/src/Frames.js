
import React, { Component } from "react";
import './App.css';
import v0 from "./images/frames/f0.png";
import v1 from "./images/frames/f1.png";
import v2 from "./images/frames/f2.png";
import v3 from "./images/frames/f3.png";

class Frames extends Component {

    constructor(props) {
        super(props);
        this.frame = [v0,v1,v2,v3];
    }
   
    render() {
        const {esel} = this.props;        
        return(
            <div className="frames">
            <div className="gallery">
                <figure>
                    <img className='frame'src={this.frame[0]} />
                    <figcaption>1</figcaption>
                </figure>
            <figure>
            <img className='frame'src={this.frame[1]} alt="" />
      <figcaption>2</figcaption>
            </figure>
            </div>
            <div className="gallery">
            <figure>
            <img className='frame'src={this.frame[2]} alt="" />
      <figcaption>3</figcaption>
            </figure>
            <figure>
            <img className='frame'src={this.frame[3]} alt="" />
      <figcaption>4</figcaption>
            </figure>
            </div>
        </div>  
    );        
    }
}

export default Frames;