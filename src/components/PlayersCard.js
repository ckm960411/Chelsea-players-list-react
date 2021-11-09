import { Link } from "react-router-dom";
import "./PlayersCard.scss";

function PlayerCard(props) {
  const { id, number, name, nameTag, position, birthData, birthPlace } = props;
  return (
    <Link
      to={{
        pathname: `/players/${id}`,
        state: { number, name, nameTag, position, birthData, birthPlace },
      }}
    >
      <div className={`profile ${position}`}>
        <img className="profile__img" src={`../../images/${nameTag}.png`} alt={name} />
        <div className="profile__description">
          <h1 className="profile__name">{name}</h1>
          <div className="profile__num">{number}</div>
        </div>
      </div>
    </Link>
  );
}

export default PlayerCard;
