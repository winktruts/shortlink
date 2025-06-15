export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;
  const { query, genre } = req.query;
  let url = '';

  if (query) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=id-ID`;
  } else if (genre) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=id-ID`;
  } else {
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=id-ID`;
  }

  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
