import React from 'react';
import Search from './Components/Search.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import DisneyCharacters, { CharacterLoader } from './Components/DisneyCharacters.jsx';
import Details from './Components/Details.jsx';
import Register from './Forms/Register.jsx';
import Favourites from './Components/Favourites.jsx';
import Login from './Forms/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Register/>} />
      <Route
        path='/home'
        loader={CharacterLoader}
        element={<DisneyCharacters />} />
      <Route path='/search' element={<Search />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/character/:characterId' element={<Details />} />
      <Route path='/favourite' element={<Favourites/>} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
