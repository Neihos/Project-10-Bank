import { configureStore } from "@reduxjs/toolkit";

let state = {
    value : null
}

const reducer = (currentState) => {
  return currentState;
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});
