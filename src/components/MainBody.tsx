import { EpisodesEntry } from "./EpisodesEntry";
import episodes from "../episodes.json";
import { useState } from "react";

export function MainBody(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(
      episodes.filter(
        (episode) =>
          episode.name ||
          episode.summary.toLowerCase().includes(event.target.value)
      )
    );
  };

  const listEpisode = episodes.map((episode) => (
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
      <div className="episode-container">{listEpisode}</div>
    </>
  );
}
