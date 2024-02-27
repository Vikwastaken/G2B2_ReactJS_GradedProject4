const fetchMovies = async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
  
  export { fetchMovies };