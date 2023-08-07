import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../../services/BookmarkSlice';

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default store;
