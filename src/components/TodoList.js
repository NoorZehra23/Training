import React, { useState } from 'react';

const TodoItem = ({ id, text, markAsDone }) => (
  <li>
    <span>{text}</span>
    <button onClick={() => markAsDone(id)}>Mark as Done</button>
  </li>
);

const CompletedItem = ({ text }) => (
  <li>
    <span>{text}</span>
  </li>
);

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nextId,
      text: newTodoText
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoText('');
    setNextId(nextId + 1);
  };

  const handleMarkAsDone = (id) => {
    const todoToMarkAsDone = todos.find((todo) => todo.id === id);
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      todoToMarkAsDone
    ]);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={handleChange}
          placeholder="Add new todo"
        />
        <button>Add</button>
      </form>
      <h2>Todo Items</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            markAsDone={handleMarkAsDone}
          />
        ))}
      </ul>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((completedTask) => (
          <CompletedItem key={completedTask.id}  text={completedTask.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;