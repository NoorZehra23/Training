<<<<<<< Updated upstream
import React, { useState } from 'react';

const TodoItem = ({ text }) =>
 <li>
    {/* <span>{id} -</span> */}
    <span>{text}</span>

 </li>;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [nextId, setNextId] = useState(1);


  const handleChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nextId,
      text: newTodoText
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoText('');
    setNextId(nextId + 1);

  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={handleChange}
          placeholder="Add new todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}   text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
=======
import React from 'react';
import Search from './Components/Search';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from 'react-router-dom';
import Layout from './Layout';
import DisneyCharacters, { CharacterLoader } from './Components/DisneyCharacters';
import Details from './Components/Details.Jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route path='/' element={<Layout/>}>     
          <Route 
          loader={CharacterLoader}
          path='' 
          element={<DisneyCharacters/>}
          
           /> 
        <Route path='/about' element={<Search />} />
        
      </Route>
    )
)
const App = () => {
  return <RouterProvider router={router} />;
>>>>>>> Stashed changes
};

export default App;
