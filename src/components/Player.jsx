import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);
  function handleChange(event){
    return setPlayerName(event.target.value)
  }
  const handleEditClick = () => {
    return setisEditing((editing) => !editing);
  };
  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  return (
    <li>
      <span className="player">
        {editableplayerName}
        <span className="player symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
