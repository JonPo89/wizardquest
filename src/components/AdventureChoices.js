import React, { useState } from 'react';
import { adventureOptions } from "../features/adventureOptions";

export function AdventureChoices (props) {
    const { adventure, setAdventure} = props;
    const [ rescueChoice, setRescueChoice ] = useState("Prince");
    const [ customRescue, setCustomRescue ] = useState("");
    const [ treasureChoice, setTreasureChoice ] = useState("Magical Weapon");
    const [ customTreasure, setCustomTreasure ] = useState("");
    const [ enemyChoice, setEnemyChoice ] = useState("Tiny Ducks");
    const [ customEnemy, setCustomEnemy ] = useState("");
    const [ bossChoice, setBossChoice ] = useState("Dragon");
    const [ customBoss, setCustomBoss ] = useState("");
    const adventureMessage = "But what kind of adventure are you going to embark on, what kind of perals will you face, and more importantly what kind of treasures are looking to find?"
    

    function onClickAdventure() {
        const randomNo = Math.random()*4
        setAdventure({
            rescue: rescueChoice !== "custom" ? rescueChoice : customRescue.length > 0 ? customRescue : alert("Please select a character to rescue"),
            treasure: treasureChoice!== "custom"? treasureChoice : customTreasure.length > 0 ? customTreasure : alert("Please select a treasure"),
            enemies: enemyChoice!== "custom"? enemyChoice : customEnemy.length > 0 ? customEnemy : alert("Please select an enemy to encounter"),
            boss: bossChoice!== "custom"? bossChoice : customBoss.length > 0 ? customBoss : alert("Please select a boss to encounter"),
            storyType: randomNo > 3 ? "happy" : "sad"
        });
    }
    
    return (
        <div className="box">
            <h3>{adventureMessage}</h3>
                <div id="rescueChoice">
                    <h3>Who are you going to rescue?</h3>
                    <select name="dropdown" onChange={(e) => setRescueChoice(e.target.value)}>
                     {adventureOptions.rescue.map((rescuee, key) => (
                        <option key={key} value={rescuee}>{rescuee}</option>
                     ))}
                        <option value="custom">Custom</option>
                    </select>
                    {rescueChoice === "custom" && (
                        <input type="text" id="rescueCustom" placeholder="Rescuee" onChange={(e) => setCustomRescue(e.target.value)} />
                    )}
                    
                </div>
                <div id="treasureChoice">
                    <h3>What kind of treasures are you looking for?</h3>
                    <select name="dropdown" onChange={(e) => setTreasureChoice(e.target.value)}>
                     {adventureOptions.treasure.map((treasure, key) => (
                        <option key={key} value={treasure}>{treasure}</option>
                     ))}
                        <option value="custom">Custom</option>
                    </select>
                    {treasureChoice === "custom" && (
                        <input type="text" id="treasureCustom" placeholder="Treasure" onChange={(e) => setCustomTreasure(e.target.value)}/>
                    )}
                    
                </div>
                <div id="enemyChoice">
                    <h3>What enemies will you encounter?</h3>
                    <select name="dropdown" onChange={(e) => setEnemyChoice(e.target.value)}>
                     {adventureOptions.enemies.map((enemy, key) => (
                        <option key={key} value={enemy}>{enemy}</option>
                     ))}
                        <option value="custom">Custom</option>
                    </select>
                    {enemyChoice === "custom" && (
                        <input type="text" id="enemyCustom" placeholder="Enemy" onChange={(e) => setCustomEnemy(e.target.value)}/>
                    )}
                </div>
                <div id="bossChoice">
                    <h3>Who will be the final boss?</h3>
                    <select name="dropdown" onChange={(e) => setBossChoice(e.target.value)}>
                     {adventureOptions.boss.map((boss, key) => (
                        <option key={key} value={boss}>{boss}</option>
                     ))}
                        <option value="custom">Custom</option>
                    </select>
                    {bossChoice === "custom" &&(
                        <input type="text" id="bossCustom" placeholder="Boss" onChange={(e) => setCustomBoss(e.target.value)}/>
                    )}
                </div>
                <button type="submit" onClick={onClickAdventure}>Begin your adventure</button>


        </div>
    )
    
}