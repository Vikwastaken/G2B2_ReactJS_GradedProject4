import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
