import React from "react";

const SortBy = () => {
  const handleOnChange = (e) => {
    const selected = e.target.value;
  };
  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select onChange={handleOnChange}>
        <option value="newest">Newest</option>
        <option value="distance">Distance</option>
      </select>
    </div>
  );
};

export default SortBy;
