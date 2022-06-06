import { configureStore } from "@reduxjs/toolkit";
import reflectionReducer from "./reflection-slice"

const store = configureStore({
  reducer: {
    reflection: reflectionReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>