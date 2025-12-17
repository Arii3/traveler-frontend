import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function submitNote(event) {
    props.onAdd(title, text);
    setText("");
    setTitle("");
    // this prevents the form from refreshing the page
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {/* <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      > */}
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
