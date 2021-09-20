const REDUCER_NAME = 'COUNTER';
const INITIAL_STATE = {value: 0};

import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
  },
});

export const {incremented, decremented} = counterSlice.actions;
export default counterSlice.reducer;
