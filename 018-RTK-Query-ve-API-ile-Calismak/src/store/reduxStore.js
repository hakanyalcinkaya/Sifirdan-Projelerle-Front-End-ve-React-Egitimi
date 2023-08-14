import { configureStore } from "@reduxjs/toolkit";
import { catApiSlice } from "./catApi/catApiSlicer";


export const store = configureStore({
  reducer: {
    [catApiSlice.reducerPath]: catApiSlice.reducer
  }, 
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(catApiSlice.middleware)
  }
})