import { useEffect, useState } from "react";
import Data from "../data/data.json";
import PlayerCard from "../components/PlayersCard";
import "./Players.scss";
const playersData = Data.players;



function Players() {
  const [players, setPlayers] = useState(playersData);
  const fillAllPosition = () => {
    setPlayers(playersData)
  }
  useEffect(fillAllPosition, [])
  const filterByPosition = (e) => {
    setPlayers(playersData)
    let newArray = []
    playersData.map(data => {
      if(data.position === e.target.innerText) {
        newArray.push(data)
      }
    })
    setPlayers(newArray)
  }

  return (
    <section className="container">
      <div className="position__btns">
        <button onClick={fillAllPosition} className="position__btn position__all">All position</button>
        <button onClick={filterByPosition} className="position__btn position__gk">Goalkeeper</button>
        <button onClick={filterByPosition} className="position__btn position__df">Defender</button>
        <button onClick={filterByPosition} className="position__btn position__mf">Midfielder</button>
        <button onClick={filterByPosition} className="position__btn position__fw">Forward</button>
      </div>
      <div className="players">
        {players.map(player => {
          return (
            <PlayerCard
              key={player.number}
              id={player.number}
              number={player.number}
              name={player.name}
              nameTag={player.nameTag}
              position={player.position}
              birthData={player.birthData}
              birthPlace={player.birthPlace}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Players;
