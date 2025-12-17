import React, { useState } from "react";

// function App() {
//    // Note that backgroundColor is in camelcase! and inside {}
//   var [color, setColor] = useState({ backgroundColor: "white" });
//   console.log(color);

//   function handleOver() {
//     setColor({ backgroundColor: "black" });
//   }

//   function handleOut() {
//     setColor({ backgroundColor: "white" });
//   }

//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button style={color} onMouseOut={handleOut} onMouseOver={handleOver}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;


// this way is better. it separates the determination of the state of hover from what we want to do with it.
function App() {
  const [isHover, setisHover] = useState(false);

  function handleOver() {
    setisHover(true);
  }

  function handleOut() {
    setisHover(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={
          isHover ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
        onMouseOut={handleOut}
        onMouseOver={handleOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
