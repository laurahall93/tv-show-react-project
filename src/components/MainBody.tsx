import { EpisodesEntry } from "./EpisodesEntry";
import episodes from "../episodes.json";

export function MainBody(): JSX.Element {
  const listEpisode = episodes.map((episode, id) => (
    <div key={id}>
      <EpisodesEntry
        id={episode.id}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={episode.image}
        url={episode.url}
        summary={episode.summary}
      />
    </div>
  ));

  return <div>{listEpisode}</div>;
}
