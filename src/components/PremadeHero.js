import React, {useState} from 'react';
import { heroList } from '../features/heroList';

export function PremadeHero(props) {
    const {setName, setWeapon,  setTrait} = props;
    const [activeHero, setActiveHero ] = useState(null);

    function submitExistingHero(hero){
        setName(hero.name);
        setWeapon(hero.weapon);
        setTrait(hero.trait);
        setActiveHero(hero.id);
        console.log(hero.id)
        console.log(activeHero);
    };

    return (
        <div>
            <h2>Select an already famous Hero:</h2>
            <div id="heroLineup">
                {Object.keys(heroList).map(key => {
                    const hero = heroList[key];
                    return (
                        <div className="heroSelect" key={hero.id} onClick={() => submitExistingHero(hero)} style={{backgroundColor: activeHero===hero.id ? "blue" : "pink"}}>
                            <h2>{hero.name}</h2>
                            <h3>The {hero.race} {hero.class}</h3>
                            <img src={hero.image} alt={hero.name} />
                            <h4>Trait: {hero.trait}</h4>
                            <h4>Weapon: {hero.weapon}</h4>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
