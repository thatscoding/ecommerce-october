import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="mr-8">
      <input
        type="text"
        className="border  pl-4 w-80 rounded"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
