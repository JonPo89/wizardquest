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
            <h2>Create your own story!</h2>
            <div id="createHeroDetails" className="heroLineup">
                    <>
                        <p>What should we call you?</p>
                        <input type="text" id="heroName" placeholder="Name" value={name} onChange={onChangeName}/>
                        <p>What is your weapon of choice?</p>
                        <input type="text" id="heroWeapon" placeholder="Weapon" value={weapon} onChange={onChangeWeapon}/>
                        <p>What is your expertise?</p>
                        <input type="text" id="heroTrait" placeholder="Trait" value={trait} onChange={onChangeTrait}/>
                    </>
            </div>
        </div>
    );
}