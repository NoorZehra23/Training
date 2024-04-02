import React from 'react';

const Card = ({ character }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <div className='w-64 h-64 mt-4 p-2'> 
        <img className="w-full h-full object-cover" src={character.imageUrl} alt={character.name} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{character.name}</div>
      </div>
    </div>
  );
}

export default Card;
