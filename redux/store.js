import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkTheme";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
