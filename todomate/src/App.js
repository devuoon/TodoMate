import React from "react";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>TodoMate</h1>
      <Calendar />
      <TodoList />
    </div>
  );
}

export default App;
