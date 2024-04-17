import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteItems: [
    ]
}


export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        
        addToFavourites: (state, action) => {   
            const indexFavouriteItem = state.favouriteItems.findIndex((item) => item?._id === action.payload?._id);
            if (indexFavouriteItem >= 0) {
                alert('Cant add to Favourites')

            } else {
            let character=action.payload
            state.favouriteItems.push(character)   
            }
        },


        //remove from favourites

        removeFromFavourites: (state, action) => {
            const updatedFavourites = state.favouriteItems.filter((item) => item?._id !== action.payload?._id);
            state.favouriteItems = updatedFavourites;
            localStorage.setItem("favouriteItems", JSON.stringify(updatedFavourites));
        },

    },
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer