import React from 'react';

export function Story (props) {
    const {chosenHero, storyLog, continueStory, adventure, onClickStartAgain } = props;

    return (
        <div className="box">
            <h2>Story Log:</h2>
            <div id="storyLog">
                {storyLog.map((log, index) => (
                    <p key={index}>{log}</p>
                ))}
            </div>
            <button onClick={continueStory}>Continue</button>
            <h3>Current Hero: {chosenHero.name}</h3>
            <p> ${adventure.treasure} ${adventure.boss} ${adventure.enemies} ${adventure.rescue}</p>
            <button onClick={onClickStartAgain}>New Adventure</button>
        </div>
    );

}