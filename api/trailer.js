export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;
  const { id } = req.query;
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
  res.status(200).send(trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : '');
}
