import React from 'react';

export function Story (props) {
    const {chosenHero, storyLog, continueStory, onClickStartAgain, userResponse, setUserResponse, respondToStory } = props;

    return (
        <div className="box">
            <h2>Story Log:</h2>
            <div id="storyLog">
                {storyLog.map((log, index) => (
                    <p key={index}>{log}</p>
                ))}
            </div>
            
            {storyLog.length > 1 ?
            <>
                <input type="text" id="responseToStory" placeholder="What would you like to do?" value={userResponse} onChange={(e) => setUserResponse(e.target.value)} />
                <button onClick={respondToStory}>Submit</button>
            </>
            :
            <button onClick={continueStory}>Continue</button>
            }
            <h3>Current Hero: {chosenHero.name}</h3>
            <button onClick={onClickStartAgain}>New Adventure</button>
        </div>
    );

}
