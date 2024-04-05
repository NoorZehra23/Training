import React from 'react';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
const DisneyCharacters = () => {
 const response=useLoaderData();
 const characters=response.data;
  
 
   return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center mb-4">Marvel Characters</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <Card key={character._id} character={character} />
      ))}
    </div>
  </div>
);
  
};

export default DisneyCharacters;


export const CharacterLoader = async () => {
  const response = await fetch('http://api.disneyapi.dev/character?page=1&pageSize=50')
  return response.json()
}

