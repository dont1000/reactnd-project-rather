import "./PollCard.scss"
import { ReactComponent as Dots } from "../assets/dots.svg";

function PollCard({ author, answered, color, head, children }) {

  const cardColor = color ? `pollCard--${color}` : "pollCard--green";
  const headline = () => {
    if (head) return head;
    return  answered ? `asked by  ${author.name} ` : `${author.name} asks`;
  }

  return (
    <div className={`pollCard ${cardColor}`}>
      <div className={`pollCard__author ${cardColor}`}>
        {headline()}
      </div>
      <Dots className={`pollCard__deco--bg ${cardColor}`} />
      <img className="avatar" src={author.avatarURL} alt={author.name} />
      <div className="pollCard__content">{children}</div>
    </div>
  );
}


export default PollCard;