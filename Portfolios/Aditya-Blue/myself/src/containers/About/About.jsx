import React, { Component } from 'react'

import { images } from '../../constants';
import "./About.scss";

class About extends Component {
    render() {
        return (
            <div className="intro">
                <div className="left">
                    <div className="wrapper">
                        <h2 className="welcome">Hello ,</h2>
                        <h1 className="name">I'm Aditya</h1>
                        <div className="des">
                            <div className="des-items">
                                <div className="des-item">Web Developer</div>
                                <div className="des-item">Designer</div>
                                <div className="des-item">Programmer</div>
                            </div>
                        </div>
                        <p className="description">
                            I'm Full Stack Software Developer having experience of building Web applications 
                            with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="img-bg"></div>
                    <img src={images.profile} alt="logo" className="profile-img"/>
                </div>
            </div>
        )
    }
}

export default About;
