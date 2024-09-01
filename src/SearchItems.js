import React from "react";

const SearchItems = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label>Search</label>
      <input
        id="search"
        type="text"
        placeholder="searchitem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchItems;
