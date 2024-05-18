import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieToList, handleMovieSearch } from '../reducers/moviesSlice';

function Navbar(props) {
  const [searchText, setSearchText] = useState('');

  const handleAddToMovies = (movie) => {
    props.dispatch(addMovieToList(movie));
  };

  const handleSearchClick = () => {
    props.dispatch(handleMovieSearch(searchText));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const { showSearchResults, results: movie } = props.search; // renaming results to movie

  return (
    <div className="nav">
      <div className="search-container">
        <input onChange={handleSearchChange} />
        <button id="search-btn" onClick={handleSearchClick}>
          Search
        </button>

        {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);