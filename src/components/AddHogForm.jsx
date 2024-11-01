import React, { useState } from 'react';

const AddHogForm = ({ addHog }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHog = { name, image, specialty, weight, greased, highestMedal };
    addHog(newHog);
    // Clear the form
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '8px' }}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required style={{ margin: '5px', padding: '8px' }} />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required style={{ margin: '5px', padding: '8px' }} />
      <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" required style={{ margin: '5px', padding: '8px' }} />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" placeholder="Weight" required style={{ margin: '5px', padding: '8px' }} />
      <label style={{ color: '#3c763d' }}>
        Greased:
        <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
      </label>
      <input value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} placeholder="Highest Medal" required style={{ margin: '5px', padding: '8px' }} />
      <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px' }}>Add Hog</button>
    </form>
  );
};

export default AddHogForm;
