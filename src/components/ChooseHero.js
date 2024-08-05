import React, {useState} from 'react';
import { PremadeHero } from './PremadeHero';
import { CustomHero } from './CustomHero';
import './chooseHero.css';

export function ChooseHero (props) {
    const {name, setName, weapon, setWeapon, trait, setTrait, onSubmit} = props;
    const [premadeToggle, setPremadeToggle] = useState(false);
    const welcomeMessage = "Welcome young adventurer, we are about to take a journey full of dangers, treasures, and glory! First tell me a little about yourself."

    return (
        <div className="box">
            <h3>{welcomeMessage}</h3>
            {!premadeToggle ?
                <PremadeHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait}/>
            :
                <CustomHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait}/>
            }
            <button type="button" id="premadeCustonHeroButton" onClick={() => setPremadeToggle(!premadeToggle)}>{premadeToggle ? "Or Choose an Existing Hero" : "Or Create Your Own Hero"}</button>
            <button type="button" onClick={onSubmit}>Start Adventure</button>
        </div>
    )

}