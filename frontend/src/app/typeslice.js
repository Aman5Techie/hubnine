import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
  type:false
};

export const typeSlice = createSlice({
  name: "data",
  initialState : intitalState,
  reducers: {
    changetype : (state,action)=>{
        state.type = action.payload
    }
    },
});

export const { changetype } = typeSlice.actions;

export default typeSlice.reducer;
