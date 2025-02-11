import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search courses..."
      value={query}
      onChange={handleSearch}
      className="w-full p-2 border rounded"
    />
  );
};

export default SearchBar;
