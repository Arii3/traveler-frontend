import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      console.log(prevItems);
      console.log(id);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            // or use UUID package instead of index
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              clicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from "react";

// function ToDoItem(props) {
//   return (
//     <li
//       onClick={() => {
//         props.clicked(props.id);
//       }}
//     >
//       {props.text}
//     </li>
//   );
// }

// export default ToDoItem;
