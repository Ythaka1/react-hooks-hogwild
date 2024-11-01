import React from 'react';

const Filter = ({ setFilteredHogs, hogs }) => {
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    if (filterValue === "greased") {
      setFilteredHogs(hogs.filter(hog => hog.greased));
    } else {
      setFilteredHogs(hogs); // Show all hogs
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ color: '#3c763d' }}>Filter:</label>
      <select onChange={handleFilterChange} style={{ marginLeft: '10px' }}>
        <option value="all">All Hogs</option>
        <option value="greased">Greased Hogs</option>
      </select>
    </div>
  );
};

export default Filter;

