import { EpisodesEntry } from "./EpisodesEntry";
import episodes from "../episodes.json";
import twoDigits from "../utils/twoDigits";

export function MainBody(): JSX.Element {
  const listEpisode = episodes.map((episode) => (
    <div key={episode.id}>
      <EpisodesEntry
        name={episode.name}
        season={twoDigits(episode.season)}
        number={twoDigits(episode.number)}
        image={episode.image}
        url={episode.url}
        summary={episode.summary}
      />
    </div>
  ));

  return <div>{listEpisode}</div>;
}
