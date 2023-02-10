import React from "react";
import {Link} from 'react-router-dom'
import videoBg from "../assests/videoBg.mp4";
import logo from "../assests/logo.png";



const BasicForm = () => {         // done laptop
    return (
        <div className="Basicform">
            <video src={videoBg} autoPlay loop muted />
            <div className="filter">
                <form>
                    <img src={logo} alt="logo" />
                    <input
                        className="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                        required
                    />

                    <input
                        className="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        required
                    />

                    <input className="loginBtn" type="submit" value="Login" />

                    <div className="links">
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BasicForm;
