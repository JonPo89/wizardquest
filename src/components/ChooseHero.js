import React, {useState} from 'react';
import { PremadeHero } from './PremadeHero';
import { CustomHero } from './CustomHero';
import './chooseHero.css';

export function ChooseHero (props) {
    const {name, setName, weapon, setWeapon, trait, setTrait, onSubmit} = props;
    const [premadeToggle, setPremadeToggle] = useState(false);

    return (
        <div className="internal">
            <p>First, who are you?</p>
            {!premadeToggle ?
                <PremadeHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait}/>
            :
                <CustomHero name={name} setName={setName} weapon={weapon} setWeapon={setWeapon} trait={trait} setTrait={setTrait}/>
            }
            <div>
                <button type="button" id="premadeCustonHeroButton" onClick={() => setPremadeToggle(!premadeToggle)}>{premadeToggle ? "Or Choose an Existing Hero" : "Or Create Your Own Hero"}</button>
                <button type="button" onClick={onSubmit}>Start Adventure</button>
            </div>
        </div>
    )

}