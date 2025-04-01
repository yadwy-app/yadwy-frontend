// export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/CartSlice";
import productsSlice from "./reducers/ProductsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
