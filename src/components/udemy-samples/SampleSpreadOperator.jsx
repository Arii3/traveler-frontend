import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  var [toDos, setToDos] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setNewItem(newValue);
  }

  function handleClick(event) {
    setToDos((prevValue) => {
      return [...prevValue, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={newItem} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDos.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
