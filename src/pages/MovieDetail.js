import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchMovieById = async (movieId) => {
  const response = await fetch('/data.json'); 
  const movies = await response.json();
  return movies.find(movie => movie.id.toString() === movieId);
};

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };

    fetchMovieData();
  }, [movieId]);

  
  if (!movie) return <div>Loading...</div>;

 
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.thumbnail} alt={movie.title} />
      <p>{movie.synopsis}</p>
    </div>
  );
}

export default MovieDetail;