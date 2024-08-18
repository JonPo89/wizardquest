import React from 'react';
import welcomeWizardPic from '../images/welcomeWizard.png';

import './welcome.css';

export function Welcome (props) {
    const {welcomeClick} = props;


    return (
        <div className="internal" id="welcome" onClick={welcomeClick}>
            
            <div id="welcomeInnerBox">
                <img id="welcomeWizard" src={welcomeWizardPic} alt="Welcome to Wizard Quest" />
                <div id="welcomeMessage">
                    <p >"Greetings adventurer, I am the wise Wizard Willy. I am going to take you on a journey full of monsters, fantasy and treasure!"</p>
                    
                </div>
            </div>
            <h2>Click to begin</h2>
            <p>Created by <b><a href="https://jonporterfolio.com/" target="_blank" rel="noreferrer">Jon Porter</a></b></p>
          
        </div>
    )

}