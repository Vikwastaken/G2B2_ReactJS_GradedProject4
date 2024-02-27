import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/moviesSlice';
import { Link } from 'react-router-dom';

function MovieCard({ movie, isFavorite }) {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie));
  };

  const moviePosterUrl = process.env.PUBLIC_URL + `/img/${movie.poster}`;

  return (
    <div>
         <Link to={`/movie/${movie.id}`}>
        <img src={moviePosterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
      {/* Movie details */}
      {isFavorite ? (
        <button onClick={handleRemoveFavorite}>Remove from Favorites</button>
      ) : (
        <button onClick={handleAddFavorite}>Add to Favorites</button>
      )}
    </div>
  );
}

export default MovieCard;