import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "../Features/favouritesSlice";
export const store=configureStore({
reducer:{
    favourites:favouritesSlice
}


})

