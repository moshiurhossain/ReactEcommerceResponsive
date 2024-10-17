import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 product: null,
 cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    productReducer: (state,action) => {
   
      state.product = action.payload;
    },
  filterProductreducer: (state,action) =>{
    state.product = action.payload;
  },
  cartReducer:(state,action)=>{

  let findIndex = state.cart.findIndex((item)=>item.id==action.payload.id);

if(findIndex == -1){
  state.cart = [...state.cart, action.payload];
  localStorage.setItem("cart",JSON.stringify([...state.cart]))
}else{
  
}


  },

  removeProduct:(state,action)=>{

state.cart.splice(action.payload.id, 1);
localStorage.setItem("cart",JSON.stringify([...state.cart]))
},
productquantityUpdate:(state,action)=>{

  if(action.payload.actionname=='increment'){
    
    state.cart[action.payload.id].qun++
    localStorage.setItem("cart",JSON.stringify([...state.cart]))
  }else{
    state.cart[action.payload.id].qun--
    localStorage.setItem("cart",JSON.stringify([...state.cart]))
  }

},


  },
})

// Action creators are generated for each case reducer function
export const { productReducer,filterProductreducer,cartReducer,removeProduct,productquantityUpdate, } = productSlice.actions

export default productSlice.reducer