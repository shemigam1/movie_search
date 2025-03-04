import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Pagination from './components/Pagination';
import MovieModal from './components/MovieModal';
import './App.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (pageNumber = 1) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=${pageNumber}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGViZTIxMGE4NDAxYjRmZmJkOTMwMTY4NGUwZmZhNiIsIm5iZiI6MTczMDQ3NTQ3Mi45NDksInN1YiI6IjY3MjRmNWQwMDFjNGRiZmE5NGY2OGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Au69kWK40fUkj73Oq5dsa7lJdZ0PIbMW0omIuGm8fg'
        }
      };
      const response = await axios.get(url, options);
      const data = response.data;
      setResults(data.results);
      setTotalPages(data.total_pages);
      setPage(data.page);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = () => {
    setPage(1);
    fetchMovies(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    fetchMovies(newPage);
  };

  return (
    <div className="w-screen">

      <div className="container mx-auto p-4 flex flex-col">
        <h1 className="text-3xl font-bold mb-4 text-center">Movie Search</h1>
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
          ))}
        </div>

        {results.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>
    </div>
  );
}

export default App;
