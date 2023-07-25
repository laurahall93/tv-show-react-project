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
    <div>
      <section>
        <p>{episode.name}</p>
        <p>Season:{episode.season}</p>
        <p>Episode:{episode.number}</p>
        <img src={episode.image.medium} alt="" />
        <br />
        <a href={episode.url}>Link to the episode</a>
        <p>{episode.summary}</p>
      </section>
    </div>
  );
};
