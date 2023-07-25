import episodes from "./episodes.json";
import { EpisodesList } from "./components/EpisodesList";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const listEpisode = episodes.map((episode, id) => (
    <div key={id}>
      <EpisodesList
        id={episode.id}
        url={episode.url}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        type={episode.type}
        airdate={episode.airdate}
        airtime={episode.airtime}
        airstamp={episode.airstamp}
        rating={episode.rating}
        runtime={episode.runtime}
        image={episode.image}
        summary={episode.summary}
        _links={episode._links}
      />
    </div>
  ));
  return (
    <>
      <h1>Cynthias and Lauras Fave TV Show!!!</h1>
      {listEpisode}
    </>
  );
}

export default App;
