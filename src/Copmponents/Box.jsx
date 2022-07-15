import React, { useState } from "react";

const Box = (props) => {
  const [text, setText] = useState("");

  const toggleText = () => {
    if (text === "") {
      setText(props.currentplayer);
      props.changeTurn(props.row, props.column);
    }
  };

  return (
    <div className="box" onClick={toggleText}>
      {text}
    </div>
  );
};

export default Box;
