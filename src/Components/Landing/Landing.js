import React from "react";
import "../../Assets/css/landing/landing.css";

import NavigationBar from './NavigationBar.js';
import Signin from "./Signin/Signin.js";
import Signup from "./Signup/Signup.js";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className='center'>
                    <center>
                        Heading
                        <br />
                        <Signin /> &emsp;
                        <Signup />
                    </center>
                    
                </div>
            </div>
        );
    }
}