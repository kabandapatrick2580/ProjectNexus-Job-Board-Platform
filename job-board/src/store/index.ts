import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './slices/jobSlice'; // Import your job slice reducer

const store = configureStore({
  reducer: {
    jobs: jobReducer, // Ensure jobs reducer is registered
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
