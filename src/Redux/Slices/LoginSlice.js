import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'login',
  initialState:{
    value:false
  },
  reducers: {
    islogin:(state)=>{
        state.value = !state.value
    }

  },
})

export const { islogin} = LoginSlice.actions

export default LoginSlice.reducer