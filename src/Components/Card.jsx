import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../Features/favouritesSlice';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ({ character , isFavourite }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleClick = () => {
    const url = `/character/${character._id}`;
    navigate(url, { state: character });
  };

    
      const removeFromFavouriteHandler = (character) => {
          dispatch(removeFromFavourites(character))
          navigate('/favourite');
      }
     
      const addToFavouriteHandler = (character) => {
        dispatch(addToFavourites(character))
        navigate('/favourite');
    }

  return (
    <div className="flex flex-col h-full items-center justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300" onClick={handleClick}>
      <div className='w-64 h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={character.imageUrl} alt={character.name} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{character.name}
        
        </div>
        {!isFavourite ? (
  <div className="flex-1 justify-center items-center p-2">
    <button
      className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center"
      onClick={() => removeFromFavouriteHandler(character)}
    >
      <span>Remove From Favourites</span>
    </button>
  </div>
) :
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
</div>}
      </div>
    </div>
  );
}

export default Card;
