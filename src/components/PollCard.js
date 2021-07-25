import "./PollCard.scss"
import { ReactComponent as Dots } from "../assets/dots.svg";

function PollCard({ author, answered, color, children }) {

  const cardColor = color ? `pollCard--${color}` : "pollCard--green";

  return (
    <div className={`pollCard ${cardColor}`}>
      <div className={`pollCard__author ${cardColor}`}>
        {answered ? `asked by  ${author.name} ` : `${author.name} asks`}
      </div>
      <Dots className={`pollCard__deco--bg ${cardColor}`} />
      <img className="avatar" src={author.avatarURL} alt={author.name} />
      <div className="pollCard__content">{children}</div>
    </div>
  );
}


export default PollCard;