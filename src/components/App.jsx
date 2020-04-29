import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [tasks, setTask] = useState([]);
  const [inputText, setInputText] = useState(" ");

  function updateList() {
    setTask(prevValue => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function saveTask(event) {
    const { value } = event.target;
    setInputText(value);
  }

  function deleteDoneTasks(id) {
    setTask(prevValue => {
      return prevValue.filter((item, index) => {
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
        <input type="text" name="task" onChange={saveTask} value={inputText} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => {
            return (
              <TodoItem
                key={index}
                item={task}
                id={index}
                clicked={deleteDoneTasks}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
