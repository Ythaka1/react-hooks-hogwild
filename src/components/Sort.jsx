import React from 'react';

const Sort = ({ setSortCriteria }) => {
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value); // Set the sort criteria based on the dropdown selection
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ color: '#3c763d' }}>Sort By:</label>
      <select onChange={handleSortChange} style={{ marginLeft: '10px' }}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Sort;
