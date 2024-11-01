import React, { useState } from "react"; // Import useState
import Nav from "./Nav";
import hogs from "../porkers_data"; // Import hog data
import Filter from "./Filter";
import Sort from "./Sort";
import AddHogForm from "./AddHogForm";
import HogTile from "./HogTile";
import './App.css';

function App() {
  // State to manage the list of hogs and sort criteria
  const [hogsList, setHogsList] = useState(hogs);
  const [sortCriteria, setSortCriteria] = useState("name"); // Default sorting by name

  // Function to sort hogs based on selected criteria
  const sortedHogs = () => {
    return [...hogsList].sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight; // Assuming weight is a number
      }
    });
  };

  // Function to add a new hog
  const addHog = (newHog) => {
    setHogsList([...hogsList, newHog]);
  };

  return (
    <div className="App">
      <Nav />
      <Filter setHogsList={setHogsList} />
      <Sort setSortCriteria={setSortCriteria} />
      <div className="ui grid">
	  {sortedHogs().map((hog) => (
        <HogTile key={hog.name} hog={hog} /> // Use HogTile with the correct casing
         ))}

      </div>
      <AddHogForm addHog={addHog} /> {/* Pass the addHog function */}
    </div>
  );
}

export default App;
