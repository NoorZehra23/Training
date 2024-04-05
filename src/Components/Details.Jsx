import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {

    const character=useLocation();
    console.log(character)

  return (
    <div className="flex flex-col h-full items-center justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300" onClick={handleClick}>
      <div className='w-64 h-64 mt-4 p-2'> 
        <img className="w-full h-full object-cover" src={character.imageUrl} alt={character.name} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{character.name}</div>
      </div>
      <div className="px-6 py-4 flex-grow">
      <div className="mb-2"><strong>Video Games:</strong></div>
        <ul>
          {character.videoGames.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ul>
        <div className="mb-2"><strong>TV Shows:</strong></div>
        <ul>
          {character.tvShows.map((show, index) => (
            <li key={index}>{show}</li>
          ))}
        </ul>
        <div className="mb-2"><strong>Films:</strong></div>
        <ul>
          {character.films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
        

      </div>
    </div>
  );
}

export default Details;
