import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div>
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isFavorite={true} />
      ))}
    </div>
  );
}

export default Favorites;