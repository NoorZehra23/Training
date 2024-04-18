import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "../Features/favouritesSlice";
import usersSlice from "../Features/usersSlice";
export const store=configureStore({
reducer:{
    favourites:favouritesSlice,
    user:usersSlice
}


})

