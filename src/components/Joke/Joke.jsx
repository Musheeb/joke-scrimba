import "./Joke.css";

function Joke({
  joke,
  punch,
  jokeSide,
  punchSide,
  upvotes,
  downvotes,
  isPun,
  comments,
}) {
  return (
    <div>
      {isPun && <p className="pun">This joke is titled as a Pun</p>}
      {joke && (
        <p className="joke">
          <span className="joke-side-heading">{jokeSide}</span>
          {joke}
        </p>
      )}
      <p className="punch">
        <span className="punch-side-heading">{punchSide}</span>
        {punch}
      </p>
      <p>Upvotes - {upvotes}</p>
      <p>Downvotes - {downvotes}</p>
      <p>Comments - </p>
      {comments.length > 0 &&
        comments.map((comment, index) => <p key={index}>{comment}</p>)}
      <hr className="ruler" />
    </div>
  );
}

export default Joke;
