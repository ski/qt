import React, { Component } from "react";
import './App.css';
import {FaEnvelope} from 'react-icons/fa';
class Review extends Component {

    render() {
        return(
            <ul id='review'>
            <li>
              <h3><FaEnvelope /></h3>
              <h3>Enter your email address</h3>
              <p>Get the high resolution softcopy of the artwork.</p>
            </li>
            </ul>
    );
    }
}

export default Review;