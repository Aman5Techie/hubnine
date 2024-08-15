import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
  data:[
    {
        id: '1',
        type: 'custom',
        data: { text: 'Temporary Node one 1.', },
        position: { x: 50, y: 50 },
      },
      {
        id: '3',
        type: 'custom',
        data: { text: 'Temporary Node two 2.', },
        position: { x: 200, y: 200 },
      },
  ]
};

export const dataSlice = createSlice({
  name: "data",
  initialState : intitalState,
  reducers: {
    addData : (state,action)=>{
        state.data = action.payload
    }
    },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
