import { createSlice } from "@reduxjs/toolkit";

const initialReflectionState = {
  data: new Array<{
    id: string;
    love: string,
    goodAt: string,
    worldNeeds: string
  }>(12).fill({
    id: "",
    love: "",
    goodAt: "",
    worldNeeds: ""
  })
}

const reflectionSlice = createSlice({
  name: "reflection",
  initialState: initialReflectionState,
  reducers: {
    initializeReflectionState(state) {
      state.data = state.data.map((item, pos) => {
        return {
          ...item,
          id: `item${pos}`
        }
      })
    }
  }
});

export const reflectionActions = reflectionSlice.actions;

export default reflectionSlice.reducer;