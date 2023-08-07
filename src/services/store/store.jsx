// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../../services/BookmarkSlice'; // Correct the import path

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    // ... other reducers if you have them
  },
});

export default store;
