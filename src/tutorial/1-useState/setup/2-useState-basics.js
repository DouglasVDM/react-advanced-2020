import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log("useState:", useState());
  // const value = useState(1)[0];
  // // const handler = useState(1)[1];
  // console.log("value:", value, "handler:", handler);
  const [text, setText] = useState("Random Title"); //  Destructuring Array
  const clickHandler = () => {
    if (text === "Random Title") {
      setText("Hello World")
    } else {
      setText("Random Title")
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={clickHandler}>Change Title </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
