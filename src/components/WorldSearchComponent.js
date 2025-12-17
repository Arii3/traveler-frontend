import React, { useEffect, useState } from "react";
import { getWorld } from "../services/apiServiceTravelerMap";
import World from "./World";
import { getUwpTables } from "../services/apiServiceWorlds";

const WorldSearchComponent = () => {
  const [findWorld, setFindWorld] = useState("");
  const [worlds, setWorlds] = useState([]);
  const [uwpTables, setUwpTables] = useState({});

  useEffect(() => {
    fetchUwpTables();
  }, []);

  const fetchUwpTables = async () => {
    try {
      const data = await getUwpTables(findWorld);
      setUwpTables(data);
    } catch (error) {
      console.error("Failed to fetch uwp tables", error);
    }
  };

  function handleChange(event) {
    setFindWorld(event.target.value);
  }

  function handleClick(event) {
    fetchWorlds();
    setFindWorld("");
    // this prevents the form from refreshing the page
    event.preventDefault();
  }

  const fetchWorlds = async () => {
    try {
      const data = await getWorld(findWorld);
      setWorlds(data);
    } catch (error) {
      console.error("Failed to fetch worlds", error);
    }
  };

  return (
    <div>
      <h1>World Search</h1>
      <form>
        <label>
          Search by World Name:
          <input
            type="search"
            value={findWorld}
            onChange={handleChange}
          ></input>
        </label>
        <button onClick={handleClick}>Search</button>
      </form>

      {/* <p>{JSON.stringify(worlds, null, 2)}</p> */}
      <ul>
        {worlds.map((world, index) => (
          <World
            key={index}
            index={index}
            name={world.World.Name}
            sector={world.World.Sector}
            uwp={world.World.Uwp}
          />
        ))}
      </ul>
    </div>
  );
};

export default WorldSearchComponent;
