import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth:authSlice
    // Define your reducers here
  },
  // Add other store enhancers if needed
});

export default store; // Export the Redux store instance for use in your application
