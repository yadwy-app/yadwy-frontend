import { configureStore } from "@reduxjs/toolkit"
import auth from "./reducers/authSlice"
import productSlice from "./reducers/productSlice"
import cartSlice from "./reducers/cartSlice"

const store = configureStore({
  reducer: {
    // auth : auth.reducer,
  }
})


export default store