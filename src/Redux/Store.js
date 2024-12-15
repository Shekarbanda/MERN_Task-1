import { configureStore } from '@reduxjs/toolkit'
import popup from '../Redux/Slices/PopupSlice'
import loginslice from '../Redux/Slices/LoginSlice'
import groupslice from './Slices/GroupSlice'

export const store = configureStore({
  reducer: {
        check:popup,
        login:loginslice,
        group:groupslice
  },
})
