import React, {useState} from 'react';
import { Header } from './components/Header';
import { ChooseHero } from './components/ChooseHero';
import { Story } from './components/Story';
import { submitStory } from './features/submitStory';
import './App.css';
import { AdventureChoices } from './components/AdventureChoices';

function App() {
  const [name, setName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [trait, setTrait] = useState("");
  const [ chosenHero, setChosenHero ] = useState(null);
  const [ storyLog, setStoryLog ] = useState([]);
  const [ adventure, setAdventure ] = useState(null);

  const botModel = "@cf/meta/llama-3-8b-instruct";

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

  function continueStory() {
    submitStory(botModel, chosenHero, adventure ).then((response) => {
      setStoryLog(prevLog => [...prevLog, JSON.stringify(response)]);
    }).catch((error) => {
      console.log("Error fetching story:" + error)
    });
  }
  
  function onClickStartAgain() {
    setChosenHero(null);
    setStoryLog([]);
    setAdventure(null);
  }
  
  return (
    <div className="App">
      
      <Header />
      {!chosenHero ?
      <ChooseHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait} onSubmit={onSubmitHero}/>
       :
      !adventure ?
        <AdventureChoices setAdventure={setAdventure} />
      :
      
      <Story chosenHero={chosenHero} storyLog={storyLog} continueStory={continueStory} adventure={adventure} onClickStartAgain={onClickStartAgain}/> 
      }
      
    </div>
  );
}

export default App;
