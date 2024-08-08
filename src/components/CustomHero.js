import React from "react";

export function CustomHero (props) {
    const { name, setName, weapon, setWeapon, trait, setTrait} = props;


    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeWeapon = (e) => {
        setWeapon(e.target.value);
    };

    const onChangeTrait = (e) => {
        setTrait(e.target.value);
    };

    return (
        <div className="heroCreate">
            <p>Are you making a name for yourself?</p   >
            <div id="createHeroDetails" className="heroLineup">
                    <>
                        <p className="customHeroInput">What should we call you?</p>
                        <input type="text" id="heroName" placeholder="Name" value={name} onChange={onChangeName}/>
                        <p className="customHeroInput">What is your weapon of choice?</p>
                        <input type="text" id="heroWeapon" placeholder="Weapon" value={weapon} onChange={onChangeWeapon}/>
                        <p className="customHeroInput">What is your expertise?</p>
                        <input type="text" id="heroTrait" placeholder="Trait" value={trait} onChange={onChangeTrait}/>
                    </>
            </div>
        </div>
    );
}