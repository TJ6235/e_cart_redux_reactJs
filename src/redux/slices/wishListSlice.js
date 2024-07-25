import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name:'wishList',
    initialState:[],
    reducers:{
        // add to wishlist
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        
        // remove item from wishlist

        removeItem:(state,action)=>{
          return  state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addToWishList,removeItem} = wishListSlice.actions
export default wishListSlice.reducer

