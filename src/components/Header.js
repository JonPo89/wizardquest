import React from 'react';
import './header.css';

export function Header(props) {

    return (
        <header>
            <h1>Welcome to WizardQuest!</h1>
            <button id="restartAdventure" onClick={props.onClickStartAgain}>Start a new Journey</button>
            <p>Created by <b><a href="https://jonporterfolio.com/" target="_blank" rel="noreferrer">Jon Porter</a></b></p>
            
        </header>
    );
}
