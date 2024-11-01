import React, { useState } from 'react';

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column">
      <div className="ui card" style={{ border: '1px solid #4caf50', borderRadius: '8px', backgroundColor: '#f9f9f9' }} onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 style={{ color: 'green' }}>{hog.name}</h3>
        </div>
        {showDetails && (
          <div className="extra content">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight} lbs</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal: {hog.highestMedal}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HogTile;