function memo() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [age, setAge] = React.useState(15);
   

  // 첫 번째 fetch예시 (then 사용.)
  React.useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${age}&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, [age]);

  // getMovies는 async-await을 쓰기위해 만듬( 두번째 useEffect에 사용됨 )
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // 두 번째 예시 (async-await)
  React.useEffect(() => {
    getMovies();
  }, []);

  // 세 번째 예시 (두 번째의 축약형)
  const getMovies2 = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  React.useEffect(() => {
    getMovies2();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
