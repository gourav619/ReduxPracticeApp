import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, show: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterAction = counterSlice.actions;
