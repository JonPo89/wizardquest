import React from 'react';
import welcomeWizardPic from '../images/welcomeWizard.png';

import './welcome.css';

export function Welcome (props) {
    const {welcomeClick} = props;


    return (
        <div className="internal" id="welcome" onClick={welcomeClick}>

            <img id="welcomeWizard" src={welcomeWizardPic} alt="Welcome to Wizard Quest" />
            <div id="welcomeMessage">
                <p >"Greetings adventurer, I am the wise Wizard Willy. I am going to take on a journey full of monsters, fantasy and treasure!"</p>
                <h2>Click to begin</h2>
            </div>
          
        </div>
    )

}