import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToFavourites, removeFromFavourites } from '../Features/favouritesSlice';

const Details = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();  
  const location=useLocation();
    const character=location.state;
    console.log(character)

    const addToFavouriteHandler = (character) => {
      dispatch(addToFavourites(character))
      navigate('/favourite');
  }


  const removeFromFavouriteHandler = (character) => {
    dispatch(removeFromFavourites(character))
    navigate('/favourite');
}

//   const addToFavouriteHandler = (character) => {
//     let item={
//     name:character.name, 
//     imageUrl:character.imageUrl,
//     movies: character.movies,
//     videoGames:character.videoGames,
//     id:character._id,
//     }
//     dispatch(addToFavourites(item))
//     navigate('/favourite');
// }

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
      <div className="flex-1 justify-center items-center p-2">
                        <button
                            className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center"
                            onClick={()=>addToFavouriteHandler(character)}
                           >
                            <div>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <span>Add to Favourites</span>
                        </button>
                    </div>
                    <div className="flex-1 justify-center items-center p-2">
                        <button
                            className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center"
                            onClick={()=>removeFromFavouriteHandler(character)}
                           >
                            <span>Remove From Favourites</span>
                        </button>
                    </div>

    </div>


  )
}

export default Details;
