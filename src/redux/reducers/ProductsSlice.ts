import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface productItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  unitPrice: number;
  imageCover: string;
}

interface productsState {
  items: productItem[];
  count: number;
  loading: boolean;
  error: string | null;
}

const initialState: productsState = {
  items: [],
  count: 0,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<productItem[]>) => {
      state.items = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const productsAction = productsSlice.actions;
export default productsSlice;
