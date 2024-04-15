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
import SignUp from './Forms/Register.jsx';
import Register from './Forms/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        path=''
        loader={CharacterLoader}
        element={<DisneyCharacters />} />
      <Route path='/search' element={<Search />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/character/:characterId' element={<Details />} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
