import React, {useRef, useEffect} from 'react';
import './story.css';
import wizardThink from '../images/wizardThink.png'

export function Story(props) {
    const { storyLog, continueStory, userResponse, setUserResponse, respondToStory, isFetchingStory, summariseStory  } = props;
    const storyLogRef = useRef(null)

    useEffect(() => {
        if (storyLogRef.current){
            storyLogRef.current.scrollTo(0, storyLogRef.current.scrollHeight);
        }
    },[storyLog])


    return (
        <div className="internal" ref={storyLogRef}>
        <div id="storyLog">
            {storyLog.map((entry, index) => (
            <div key={index} className="logEntry"> 
                <h2 className="logAuthor">{entry.role}</h2>
                <p className="logContent">
                {entry.content.split('\n').map((log, i) => (
                    <React.Fragment key={i}>
                    {log}
                    <br />
                    </React.Fragment>
                ))}
                </p>
            </div>
            ))}
        </div>
        
        {storyLog.length > 1 && !isFetchingStory && !summariseStory ? (
            <>
            <input
                type="text"
                id="responseToStory"
                placeholder="What would you like to do?"
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
            />
            <button onClick={respondToStory}>Submit</button>
            </>
            
        ) : (
            isFetchingStory || summariseStory ? 
                <div>
                <h2 className="logAuthor">Wizard</h2>
                <p className="logContent">Let me have a think about how this will play out...</p>
                <img src={wizardThink} alt="wizard thinking" id="wizardThink"/>
                </div>
                :
            
            <button onClick={continueStory}>Continue</button>
        )}
        </div>
    );
}
