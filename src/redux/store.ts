import { configureStore } from "@reduxjs/toolkit";
import cart from "./reducers/CartSlice";

const store = configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export default store;
