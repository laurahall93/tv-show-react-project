export default function episodeCode(season: number, episode: number): string {
  let seasonStr = `S${season}`;
  let episodeStr = `E${episode}`;

  if (season < 10) {
    seasonStr = `S0${season}`;
  }

  if (episode < 10) {
    episodeStr = `E0${episode}`;
  }

  return `${seasonStr}${episodeStr}`;
}
