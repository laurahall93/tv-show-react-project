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
        rating={episode.rating} //need to remove this and make it optional
        image={episode.image}
        url={episode.url}
        summary={episode.summary}
        _links={episode._links} //need to remove this and make it optional
      />
    </div>
  ));

  return <div>{listEpisode}</div>;
}
