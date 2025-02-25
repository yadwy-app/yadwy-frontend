import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QTYProps {
  id: number;
  quantity: number;
}
interface CartItem {
  id: number;
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
    updateItemQuantity: (state, action: PayloadAction<QTYProps>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const oldQuantity = existingItem.quantity;

        if (quantity > 0) {
          existingItem.quantity = quantity;
          existingItem.price = quantity * existingItem.unitPrice;
          state.quantity += quantity - oldQuantity;
         
        } else {
          state.items = state.items.filter((item) => item.id !== id);
          state.quantity -= oldQuantity;
        }
        state.totalPrice = state.items.reduce(
          (acc, item) => acc + item.unitPrice * item.quantity,
          0
        );
      }
    },

    addItems: (state, action: PayloadAction<CartItem>) => {
      const itemAdded = action.payload;
      const existingItem = state.items.find((item) => item.id === itemAdded.id);

      // console.log("itemAdded", itemAdded);

      if (!existingItem) {
        state.items.push({
          id: itemAdded.id,
          title: itemAdded.title,
          price: itemAdded.price,
          quantity: itemAdded.quantity,
          unitPrice: itemAdded.unitPrice,
          imageCover: itemAdded.imageCover,
        });
        state.quantity++;
      } else {
        existingItem.quantity++;
        state.quantity++;
        existingItem.price = existingItem.quantity * existingItem.unitPrice;
      }

      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0,
      );
    },

    // removeItem: (state, action: PayloadAction<string>) => {
    //   const id = action.payload;
    //   const itemIndex = state.items.findIndex((item) => item.id === id);

    //   if (itemIndex !== -1) {
    //     if (state.items[itemIndex].quantity > 1) {
    //       state.items[itemIndex].quantity--;
    //     } else {
    //       state.items.splice(itemIndex, 1);
    //     }
    //   }

    //   state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
    //   state.totalPrice = state.items.reduce(
    //     (acc, item) => acc + item.price * item.quantity,
    //     0,
    //   );
    // },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
