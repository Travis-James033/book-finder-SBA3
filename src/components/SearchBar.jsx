import React, { useRef } from 'react';
import { useGlobalContext } from '../services/context';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.trim();

    if (!searchTerm) {
      setSearchTerm("SearchHere");
      setResultTitle("Please enter something.");
    } else {
      setSearchTerm(searchTerm);
      setResultTitle("Your Search Result");
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Search Here"
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
