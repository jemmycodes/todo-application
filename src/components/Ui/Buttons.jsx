import React from "react";

function Buttons(props) {
  return (
    <button className="p-2 rounded-md text-white w-full bg-BlueBtns">
      {props.children}
    </button>
  );
}

export default Buttons;
