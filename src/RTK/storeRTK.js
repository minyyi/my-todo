import { configureStore } from "@reduxjs/toolkit";
import todosRtk from "./todosSlice";

export default configureStore({
  reducer: {
    todosSlice: todosRtk,
  },
});
