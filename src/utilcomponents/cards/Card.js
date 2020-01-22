import React from "react";
import "./Card.css";
import asset from "../../asset/parth.png";

const card = () => {
    return (
        <div>
            <img className="image" src={asset} alt="Avatar"/>
            <h1 className="name-title">Parth Patel</h1>
            <small>Software Developer/Research Assistant at Algonquin College</small>
            <p className="text-muted info">
                As a computer programmer, I am truly passionate about computer programming technologies.
                In the recent course of time, I have built web applications with the help of ReactJS along with
                Bootstrap, HTML5, CSS3 on the front-end side and Java(SE and EE), Python (Django), SpringBoot.<br/></p>
            <p className="text-muted info">Currently, I am working as a Software Developer/Research Assistant at Algonquin College. I show immense
                dedication in every work that I do. I always share my knowledge that I have gained through my hard work
                and experience.<br/></p>
            <p className="text-muted info">I like to work on tasks full of challenges as it kind of fills me with confidence and energy.
                While I am not with a computer, you can find me with my family, friends or learning about the financial
                market. I like playing cricket, ice skating (though I am a beginner), watching movies, listening to
                music and many more.
            </p><br/>
            <p className="text-primary">
                This ReactJS base website is currently in developing stage. I have committed myself to add various new
                features to it.
            </p>
        </div>
    );
};

export default card;