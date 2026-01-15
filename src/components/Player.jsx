import React, { useState } from "react";

const Player = ({name,symbol}) => {

    const [isEditing, setisEditing] = useState(false);

    const handleEditClick = () =>{
       return setisEditing (true);
    }
let playerName = <span className="player-name">{name}</span>

if(isEditing){
playerName=<input type="text" required/>
}

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default Player;
