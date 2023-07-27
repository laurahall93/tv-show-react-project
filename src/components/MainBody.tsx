import { EpisodesEntry } from "./EpisodesEntry";
import episodes from "../episodes.json";
import { useState } from "react";

export function MainBody(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  // const [searchEpisodes, setSearchEpisodes] = useState<IEpisode[]>(episodes)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const searchEpisodeData = episodes.filter(
    (episode) =>
      episode.name.toLowerCase().includes(searchInput) ||
      episode.summary.toLowerCase().includes(searchInput)
  ); // turn this into a function that takes in episode data and filters it by the searchInput

  // turn listEpisodes into component that takes in Episode data as a prop
  const listEpisodes = searchEpisodeData.map((episode) => (
    <div key={episode.id}>
      <EpisodesEntry
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={episode.image}
        url={episode.url}
        summary={episode.summary}
      />
    </div>
  ));

  return (
    <>
      <input
        type="text"
        placeholder="search tv show"
        value={searchInput}
        onChange={handleChange}
      />
      <div className="episode-container">{listEpisodes}</div>
    </>
  );
}
