export interface Image {
  medium: string;
  original: string;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export const EpisodesList = (episode: IEpisode): JSX.Element => {
  return (
    <div>
      <section>
        <p>id:{episode.id}</p>
        <a href={episode.url}> Episode link </a>
        <p>Name:{episode.name}</p>
        <p>Season:{episode.season}</p>
        <p>Number:{episode.number}</p>
        <p>Type:{episode.type}</p>
        <p>Airdate:{episode.airdate}</p>
        <p>Airtime:{episode.airtime}</p>
        <p>Airstamp:{episode.airstamp}</p>
        <p>Average rating:{episode.rating.average}</p>
        <p>Runtime{episode.runtime}</p>
        <img src={episode.image.medium} alt="" />
        <br />
        <img src={episode.image.original} alt="" />
        <p>{episode.summary}</p>
        <a href={episode._links.self.href}>Link to episode API</a>
      </section>
    </div>
  );
};
