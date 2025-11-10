import { configureStore } from "@reduxjs/toolkit";
import youTubeSlice from './slice';

export const store = configureStore({
    reducer: youTubeSlice,
})



