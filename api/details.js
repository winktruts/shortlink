export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;
  const { id } = req.query;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=id-ID`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
