import { combineReducers } from '@reduxjs/toolkit';
import jobReducer from './slices/jobSlice';

const rootReducer = combineReducers({
  jobs: jobReducer,
});

export default rootReducer;