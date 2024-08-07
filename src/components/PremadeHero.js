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
    };

    return (
        <div id="premadeHero" className="heroCreate">
            <h2>Select an already famous Hero:</h2>
            <div id="heroLineup">
                {Object.keys(heroList).map(key => {
                    const hero = heroList[key];
                    return (
                        <div className="heroSelect" key={hero.id} onClick={() => submitExistingHero(hero)} style={{backgroundColor: activeHero===hero.id ? "blue" : "pink"}}>
                            <h2>{hero.name}</h2>
                            <img src={hero.image} alt={hero.name} />
                            <h4>Trait:</h4>
                            <p>{hero.trait}</p>
                            <h4>Weapon:</h4>
                            <p>{hero.weapon}</p>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
