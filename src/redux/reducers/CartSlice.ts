import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  isLogin:false
}

const cart = createSlice({
  name: "auth",
  initialState,
  reducers: {
    UserLogin: (state, action)=> {
      state.user.push(...action.payload)
      state.isLogin = true
    },
  }

});


export default cart