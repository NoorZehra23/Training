import React, { useState} from 'react';
import Card from './Card'; 
import axios from 'axios';


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSearch = async () => {
    try {
      const queryParams = encodeURIComponent(searchQuery);
      const apiUrl = `https://api.disneyapi.dev/character?name=${queryParams}`;
      const response = await axios.get(apiUrl);
      const data = await response.data.data;
      const normalizedData = Array.isArray(data) ? data : [data]; 
      setCharacters(normalizedData);
      
    } catch (error) {
      console.error('Error searching characters:', error);
    }
  };

  return (
    <div className='flex-1 p-4 m-3 flex flex-col items-center justify-center'>
    <div className='p-2 m-2 text-center'>      
      <h1 className="text-3xl font-bold mb-4">Disney Characters</h1>
      <p>Search For Your Favourite Disney Characters</p>
    </div>
  
    <div className="flex items-center justify-center align-center">
        
        <input
          type="text"
          placeholder="Search Disney characters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
  {characters.length === 0 ? (
    <p>No characters found</p>
  ) : (
    characters.map((character) => (
      <Card key={character._id} character={character} />
    ))
  )}
</div>

    </div>
  );
};

export default Search;