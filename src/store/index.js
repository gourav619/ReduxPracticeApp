import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { counterSlice } from "./counter";

// const counterInitialState = { counter: 0, show: true };
// const authInitialState = { isAuthenticated: false };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: counterInitialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     toggle(state) {
//       state.show = !state.show;
//     },
//   },
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: authInitialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
