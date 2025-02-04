import { configureStore } from "@reduxjs/toolkit"
import auth from "./reducers/authSlice"

const store = configureStore({
  reducer: {
    // auth : auth.reducer,
  }
})


export default store