

function PollCard({ author, answered, children }) {
  return (
    <div>
      <h2>{answered ? `asked by  ${author.name} ` : `${author.name} asks`}</h2>
      <img src={author.avatarURL} alt={author.name} />
      <div>{children}</div>
    </div>
  );
}


export default PollCard;