import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  isLogin:false
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    UserLogin: (state, action)=> {
      state.user.push(...action.payload)
      state.isLogin = true
    },
    UserLogout: (state, action)=> {
      state.user = []
      state.isLogin = false
    }
  }

});


export default auth