import { combineReducers } from '@reduxjs/toolkit';
import platformReducer from './platformSlice';

// Combine the platform reducer with any other reducers you might add in the future
const rootReducer = combineReducers({
  platform: platformReducer,
});

export default rootReducer;