import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Projects/counter/counterSlice';
// import userReducer from '../users/userSlice';

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    // users: userReducer,
  },
});

export default Store;
