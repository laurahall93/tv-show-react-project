import { EpisodesEntry } from "./EpisodesEntry";
import episodes from "../episodes.json";

export function MainBody(): JSX.Element {
  const listEpisode = episodes.map((episode, id) => (
    <div key={id}>
      <EpisodesEntry
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

  return <div>{listEpisode}</div>;
}
