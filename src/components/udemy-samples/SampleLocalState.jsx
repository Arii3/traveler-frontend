import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    console.log(isDone);
    setIsDone(!isDone);
  }

  return (
    <li
      onClick={handleClick}
      style={isDone ? { textDecoration: "line-through" } : null}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;