import "./App.css";
import Joke from "./components/Joke/Joke.jsx";

function App() {
  return (
    <div className="main-container">
      <h1>Laugh - Because you have nothing to do right now</h1>
      <Joke
        joke="I told my wife she was drawing her eyebrows too high."
        punch="She looked surprised."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
      />
      <Joke
        joke="Why don't skeletons fight each other?"
        punch="They don't have the guts."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
      />
      <Joke
        joke="I asked my dog what's 2 minus 2."
        punch="He said nothing."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
      />
      <Joke
        joke="Parallel lines have so much in common."
        punch="It's a shame they'll never meet."
        jokeSide="JOKE - "
        punchSide="PUNCH - "
      />
      <Joke
        joke="My friend says 'I'm going to become a vegetarian.'"
        punch="I said 'That's a big missed steak.'"
        jokeSide="JOKE - "
        punchSide="PUNCH - "
      />
    </div>
  );
}

export default App;
