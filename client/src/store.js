//import applyMiddleware from "redux";
import { configureStore } from '@reduxjs/toolkit'
//import {composeWithDevtools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./components/reducers";
const initialState={};
const middleware=[thunk];
const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(...middleware)
        
  })

export default store