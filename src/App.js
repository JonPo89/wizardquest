import React, {useState, useEffect} from 'react';
import { Header } from './components/Header';
import { ChooseHero } from './components/ChooseHero';
import { Story } from './components/Story';
import './App.css';
import { storyGenerator } from './features/storyGenerator';
import { summariseStory } from './features/summariseStory';

function App() {
  const [name, setName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [trait, setTrait] = useState("");
  const [ chosenHero, setChosenHero ] = useState(null);
  const [ storyLog, setStoryLog ] = useState([]);
  const [ userResponse, setUserResponse ] = useState("");
  const [ responseHistory, setResponseHistory ] = useState([{ role: "user", content: "I am ready to start my adventure"}]);
  const [ isFetchingStory, setIsFetchingStory ] = useState(false);

  function onSubmitHero() {
    if (name && weapon && trait) {
      const newHero = {
        name,
        weapon,
        trait
      };
    setChosenHero(newHero);
    setStoryLog(prevLog => [...prevLog, `Ah yes, ${name} I've heard of you!  Tales of your ${trait} and skills with the ${weapon} have spread far across the land, but even so, this adventure will be full of perals that you have never encountered before.  If you think that you are ready, let's continue...`])

    } else {
      alert("Please fill out all fields");
    }
  };  

  useEffect(() => {
    if (isFetchingStory) {
      console.log(responseHistory);
      storyGenerator(chosenHero.name, chosenHero.weapon, chosenHero.trait, responseHistory ).then((response) => {
        setStoryLog(prevLog => [...prevLog, JSON.stringify(response)]);
        setResponseHistory(prevLog => [...prevLog, {role: 'assistant', content: JSON.stringify(response)}]);
        setIsFetchingStory(false)
        if (responseHistory.length > 6) {
          console.log("summarising Story")
          summariseStory(responseHistory).then((response) => {
            setResponseHistory({role: 'assistant', content: JSON.stringify(response)});
          }).catch((error) => {
            console.log("Error summarising story:" + error)
          });}
      }).catch((error) => {
        console.log("Error fetching story:" + error)
        setIsFetchingStory(false);
      });
    }
  },[isFetchingStory, chosenHero, responseHistory])


  function continueStory() {
    console.log(chosenHero.name + chosenHero.weapon + chosenHero.trait)
    setIsFetchingStory(true);
  }

  function respondToStory() {

    if ( userResponse.length > 0) {
      setResponseHistory(prevLog => [...prevLog, {role: 'user', content: userResponse}]);
      setStoryLog(prevLog => [...prevLog, userResponse]);
      setUserResponse("");
      setIsFetchingStory(true);
      
    } else {
      alert("Please type a response");
    }
    
  }
  
  function onClickStartAgain() {
    setChosenHero(null);
    setStoryLog([]);
    setResponseHistory([{ role: "user", content: "I am ready to start my adventure"}]);

  }
  
  return (
    <div className="App">
      
      <Header />
      {!chosenHero ?
      <ChooseHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait} onSubmit={onSubmitHero}/>
      :
      <Story chosenHero={chosenHero} storyLog={storyLog} continueStory={continueStory} onClickStartAgain={onClickStartAgain} userResponse={userResponse} setUserResponse={setUserResponse} respondToStory={respondToStory}/> 
      }
      
    </div>
  );
}

export default App;
