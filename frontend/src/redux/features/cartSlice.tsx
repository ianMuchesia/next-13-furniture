import { cartModel, cartProductModel, typeProduct } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";


const initialCartState: cartModel = {
  itemsList: [],

  subTotal: 0,
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
      addToCart(state, action) {
        const newItem: cartProductModel = action.payload;
  
        const itemExists = state.itemsList.find(
          (item) => item._id === newItem._id
        );
        if (itemExists) {
          itemExists.quantity++;
          itemExists.totalPrice += newItem.price;
         
          
        } else {
          state.itemsList.push({
            _id: newItem._id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.name,
            imageUrl: newItem.imageUrl,
            
          });
          state.totalQuantity++;
        
        }
        state.subTotal += newItem.price;
       
      },
      //if you had increased the quantity of the same item
      removeSingleItemFromCart(state, action) {
        const id = action.payload;
        const itemExists = state.itemsList.find((item) => item._id === id);
        if (itemExists !== undefined) {
          if (itemExists.quantity === 1) {
            state.itemsList = state.itemsList.filter((item) => item._id !== id);
  
          } else {
            itemExists.quantity--;
          }
          state.subTotal -= itemExists.price;
        }
      },
      removeItemFromCart(state, action) {
        const id = action.payload;
        const newItemsList = state.itemsList.filter((item) => item._id !== id);
        state.itemsList = newItemsList;
        state.itemsList.forEach(item=>{
          state.subTotal+=item.price;
        })
      },
      setShowCart(state, action){
          state.showCart = action.payload
      }
    },
  });



  export const {setShowCart, removeItemFromCart , removeSingleItemFromCart , addToCart } = cartSlice.actions
  export default cartSlice.reducer

