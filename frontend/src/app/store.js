import { configureStore } from "@reduxjs/toolkit";
import datareducer from './dataslice';
import typereducer from './typeslice';

const store = configureStore({
//   reducer: {datareducer},
  reducer: {datareducer,typereducer},
});

export default store;
