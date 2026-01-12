import "./Joke.css";

function Joke({ joke, punch, jokeSide, punchSide }) {
  return (
    <div>
      <p className="joke">
        <span className="joke-side-heading">{jokeSide}</span>
        {joke}
      </p>
      <p className="punch">
        <span className="punch-side-heading">{punchSide}</span>
        {punch}
      </p>
      <hr className="ruler" />
    </div>
  );
}

export default Joke;
