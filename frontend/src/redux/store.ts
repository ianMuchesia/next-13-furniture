import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import cartSlice from "./features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/Api";



export const store = configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice,
        [api.reducerPath]: api.reducer
   
    },
    middleware: (getDefault)=>getDefault().concat(api.middleware)

})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;