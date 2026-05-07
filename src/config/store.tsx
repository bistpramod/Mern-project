// pnpm i  @reduxjs/toolkit react-redux
import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "../lib/reducers/cart-reducer"

const store = configureStore({
  reducer: {
    cart: CartReducer
  }
})

// dispatch type
export type AppDispatch = typeof store.dispatch;
// store Data -> type
export type RootState = ReturnType<typeof store.getState>

export default store; 