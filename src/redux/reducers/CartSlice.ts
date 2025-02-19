import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  unitPrice: number;
  imageCover: string;
}

interface CartState {
  items: CartItem[];
  count: number;
  loading: boolean;
  error: string | null;
  totalPrice: number;
  quantity: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
  loading: false,
  error: null,
  totalPrice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },

    addItems: (state, action: PayloadAction<CartItem>) => {
      const itemAdded = action.payload;
      const existingItem = state.items.find((item) => item.id === itemAdded.id);

      console.log("itemAdded", itemAdded);

      if (!existingItem) {
        state.items.push({
          id: itemAdded.id,
          title: itemAdded.title,
          price: itemAdded.price,
          quantity: itemAdded.quantity,
          unitPrice: itemAdded.unitPrice,
          imageCover: itemAdded.imageCover,
        });
      } else {
        existingItem.quantity++;
      }

      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity--;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }

      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
