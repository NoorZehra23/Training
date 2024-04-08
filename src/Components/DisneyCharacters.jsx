import React, { useEffect,useState,useReducer} from 'react';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
const DisneyCharacters = () => {
  const response = useLoaderData();
  const [characters, setCharacters] = useState(response.data);                                                                                             

  //reducer to handle prev and next page
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, pageSize: state.pageSize+1 };
      case "DECREMENT":
        return { ...state, pageSize:state.pageSize-1 };
          default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {pageSize:1});  


  const fetchPage = async () => {
    try {
      const response = await fetch(`http://api.disneyapi.dev/character?page=${state.pageSize}&pageSize=50`);
      const data = await response.json();
      setCharacters(data.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };  


//useEffect to fetch characters when page changes
  useEffect(() => {
    fetchPage()
  }, [state.pageSize]);

//useRef didnt work ask why
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [characters]);


  return (
    <>
    <div className="container mx-auto " >
      <h1 className="text-3xl font-bold text-center mb-4">Disney Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
        {characters.map((character) => (
          <Card key={character._id} character={character} />
        ))}
      </div>


<div className="flex mg-3 p-3 items-center justify-center">
{ state.pageSize > 1 && (
  <div className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={(e) =>   dispatch({ type:"DECREMENT"})}>
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </div>
)}
  <div className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={(e) =>   dispatch({ type:"INCREMENT"})}>
    Next
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </div>
</div>
    </div>
  
    </>
);

};

export default DisneyCharacters;

//function for loader prop of Route
export const CharacterLoader = async () => {
  const response = await fetch('http://api.disneyapi.dev/character?page=1&pageSize=50')
  return response.json()
}

