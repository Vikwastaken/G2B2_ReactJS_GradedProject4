import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Movies on the Tip</h1>
      <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
    </nav>
  );
}
export default Navbar;