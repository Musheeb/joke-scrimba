import "./App.css";
import Joke from "./components/Joke/Joke.jsx";
import jokeData from "./data.js";

function App() {
  const jokes = jokeData.map((joke) => {
    return <Joke key={joke.id} {...joke} />;
  });
  // console.log(jokes);
  // console.log("Hola");
  // console.log(jokes);
  return (
    <div className="main-container">
      <h1>Laugh - Because you have nothing to do right now</h1>
      {jokes}
      {/* <Joke
        // joke="I told my wife she was drawing her eyebrows too high."
        punch="No Joke for this - Becasue we are testing conditional rendering"
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={true}
        upvotes={2}
        downvotes={9}
        comments={["masao", "nice", "funny"]}
      />
      <Joke
        joke="I told my wife she was drawing her eyebrows too high."
        punch="She looked surprised."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={true}
        upvotes={6}
        downvotes={0}
        comments={[]}
      />
      <Joke
        joke="Why don't skeletons fight each other?"
        punch="They don't have the guts."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={false}
        upvotes={5}
        downvotes={2}
        comments={["Nice", "Really good", "so funny", "😂😂😂😂😂"]}
      />
      <Joke
        joke="I asked my dog what's 2 minus 2."
        punch="He said nothing."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={true}
        upvotes={5}
        downvotes={1}
        comments={["Hola", "buen", "Nice", "funny"]}
      />
      <Joke
        joke="Parallel lines have so much in common."
        punch="It's a shame they'll never meet."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={true}
        upvotes={8}
        downvotes={1}
        comments={["heyyy", "nova", "activa", "what are you upto? ☺️"]}
      />
      <Joke
        joke="My friend says 'I'm going to become a vegetarian.'"
        punch="I said 'That's a big missed steak.'"
        jokeSide="JOKE - "
        punchSide="PUNCH - "
        isPun={false}
        upvotes={9}
        downvotes={3}
        comments={["heyy"]}
      /> */}
    </div>
  );
}

export default App;
