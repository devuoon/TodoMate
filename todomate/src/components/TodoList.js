import React, { useState } from "react";
import { css } from "@emotion/react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div css={todoListStyle}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} css={todoItemStyle(todo.completed)}>
            <span onClick={() => handleToggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

const todoListStyle = css({
  width: "300px",
  margin: "20px auto",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
});

const todoItemStyle = (completed) =>
  css({
    textDecoration: completed ? "line-through" : "none",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  });
