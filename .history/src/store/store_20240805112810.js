import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Define your reducers here
  },
  // Add other store enhancers if needed
});

export default store; // Export the Redux store instance for use in your application
