import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '../../services/movieService';

export const fetchMoviesAsync = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    const movies = await fetchMovies();
    return movies;
  }
);

const initialState = {
  list: [],
  favorites: [],
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;