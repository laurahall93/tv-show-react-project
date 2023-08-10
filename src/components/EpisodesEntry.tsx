import episodeCode from "../utils/episodeCode";

export interface Image {
  medium: string;
  original: string;
}

export interface IEpisode {
  id?: number;
  url?: string;
  name: string;
  season: number;
  number: number;
  type?: string;
  airdate?: string;
  airtime?: string;
  airstamp?: string;
  rating?: { average?: number };
  runtime?: number;
  image: {
    medium: string;
    original?: string;
  };
  summary: string;
  _links?: { self: { href?: string } };
}

export const EpisodesEntry = (episode: IEpisode): JSX.Element => {
  return (
    <div className="episode-entry">
      <section>
        <div className="container">
          <div className="episode-title">
            <p>
              {episode.name} {episodeCode(episode.season, episode.number)}
            </p>
          </div>
          <img src={episode.image.medium} alt="" />
        </div>
        <br />
        <a href={episode.url}>Link to the episode</a>
        <p className="summary">{episode.summary}</p>
      </section>
    </div>
  );
};
