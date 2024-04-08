import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const character = location.state;

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">{character.name}</h2>
      <div className='w-64 h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={character.imageUrl} alt={character.name} />
      </div>
      <div className="mb-4 text-left">
        <strong>Movies:</strong>
        <ul className="ml-4">
          {character.films.length > 0 ? (
            character.films.map((film, index) => (
              <li key={index}>{film}</li>
            ))
          ) : (
            <li>No Film appearance</li>
          )}
        </ul>
      </div>
      <div className="mb-4 text-left">
        <strong>Video Game Appearances:</strong>
        <ul className="ml-4">
          {character.videoGames.length > 0 ? (
            character.videoGames.map((game, index) => (
              <li key={index}>{game}</li>
            ))
          ) : (
            <li>No video game appearance</li>
          )}
        </ul>
      </div>
      <div className="mb-4 text-left">
        <strong>TV Show Appearances:</strong>
        <ul className="ml-4">
          {character.tvShows.length > 0 ? (
            character.tvShows.map((tvShow, index) => (
              <li key={index}>{tvShow}</li>
            ))
          ) : (
            <li>No TV Show appearance</li>
          )}
        </ul>
      </div>
    </div>


  )
}

export default Details;
