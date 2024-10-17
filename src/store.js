import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import  userSlice  from './slices/userSlice'


export const store = configureStore({
  reducer: {
    allproduct:productSlice,
    userLogin:userSlice,
    
  },
})