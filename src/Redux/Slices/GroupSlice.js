import { createSlice } from '@reduxjs/toolkit'



export const GroupSlice = createSlice({
  name: 'group',
  initialState:{
    value:true
  },
  reducers: {
    isgroup:(state)=>{
        state.value = !state.value
    }

  },
})

export const { isgroup} = GroupSlice.actions

export default GroupSlice.reducer