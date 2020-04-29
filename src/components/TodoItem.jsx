import React, { useState } from "react";

function TodoItem(props) {
  const [isItemClicked, setDone] = useState(false);

  // function drawLine(event) {
  //   !isItemClicked ? setDone(true) : setDone(false);
  // }
  return (
    <li
      onClick={() => {
        props.clicked(props.id);
      }}
      neme={props.id}
      style={{ textDecoration: isItemClicked && "line-through" }}
    >
      {" "}
      {props.item}
    </li>
  );
}

export default TodoItem;
