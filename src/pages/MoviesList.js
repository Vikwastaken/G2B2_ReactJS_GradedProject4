import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync } from '../redux/slices/moviesSlice';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  // Adding conditional check to ensure 'movies' is an array
  const filteredMovies = Array.isArray(movies) ? movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div>
      <SearchBar onSearchChange={setSearchTerm} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
