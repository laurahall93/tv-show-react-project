import episodes from "./episodes.json";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return <h1>Cynthias and Lauras Fave TV Show!!!</h1>;
}

export default App;
