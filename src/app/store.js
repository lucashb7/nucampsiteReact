import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlices'

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  },
});
