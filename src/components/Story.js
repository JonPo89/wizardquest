import React from 'react';
import './story.css';

export function Story (props) {
  const { storyLog, continueStory, userResponse, setUserResponse, respondToStory } = props;

  return (
    <div className="internal">
      <div id="storyLog">
        {storyLog.map((entry, index) => (
            <div className="logEntry">
                <h2 className="logAuthor">{entry.role}</h2>
            <p key={index} className="logContent">
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

      {storyLog.length > 1 ?
        <>
          <input type="text" id="responseToStory" placeholder="What would you like to do?" value={userResponse} onChange={(e) => setUserResponse(e.target.value)} />
          <button onClick={respondToStory}>Submit</button>
        </>
        :
        <button onClick={continueStory}>Continue</button>
      }
    </div>
  );
}
