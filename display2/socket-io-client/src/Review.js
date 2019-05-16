import React, { Component } from "react";
import './App.css';
import {MdPrint} from 'react-icons/md';
class Review extends Component {

    render() {
        return(
            <ul id='review'>
            <li>
              <h3><MdPrint /></h3>
              <p>Get the high resolution print which could be framed later</p>
            </li>
            </ul>
    );
    }
}

export default Review;