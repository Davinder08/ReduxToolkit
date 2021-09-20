const REDUCER_NAME = 'COUNTER';
const INITIAL_STATE = {value: 0};

import {createSlice} from '@reduxjs/toolkit';

const testSlice = createSlice({
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

export const {incremented, decremented} = testSlice.actions;
export default testSlice.reducer;
