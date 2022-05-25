export const loadFilms = async () => {
  const filmFetch = fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR&page=1',
  );
  const filmResponse = await filmFetch;
  const filmJson = await filmResponse.json();
  return filmJson;
};
