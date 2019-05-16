
import React, { Component } from "react";
import './App.css';
import v00 from "./images/0/0.png";
import v01 from "./images/0/1.png";
import v02 from "./images/0/2.png";
import v03 from "./images/0/3.png";

import v10 from "./images/1/0.png";
import v11 from "./images/1/1.png";
import v12 from "./images/1/2.png";
import v13 from "./images/1/3.png";

import v20 from "./images/2/0.png";
import v21 from "./images/2/1.png";
import v22 from "./images/2/2.png";
import v23 from "./images/2/3.png";

import v30 from "./images/3/0.png";
import v31 from "./images/3/1.png";
import v32 from "./images/3/2.png";
import v33 from "./images/3/3.png";

import v40 from "./images/4/0.png";
import v41 from "./images/4/1.png";
import v42 from "./images/4/2.png";
import v43 from "./images/4/3.png";


class Fonts extends Component {
    
    constructor(props) {
        super(props);
        this.fonts = [
            [v00,v01,v02,v03],
            [v10,v11,v12,v13],
            [v20,v21,v22,v23],
            [v30,v31,v32,v33],
            [v40,v41,v42,v43],
        ];               
    }

    render() {
        const {esel} = this.props;        
        let cali = this.fonts[esel];

        return(
            <div className="fonts">
            <div className="gallery">
                <figure>
                    <img className='font'src={cali[0]} />
                    <figcaption>Jali Diwani</figcaption>
                </figure>
                <figure>
                    <img className='font'src={cali[1]} alt="" />
                    <figcaption>Kufic</figcaption>
                </figure>
            </div>
            <div className="gallery">
                <figure>
                    <img className='font'src={cali[2]} alt="" />
                    <figcaption>Nastaliq</figcaption>
                </figure>
                <figure>
                    <img className='font'src={cali[3]} alt="" />
                    <figcaption>Thuluth</figcaption>
                </figure>
            </div>
        </div>  
    );
    }
}

export default Fonts;