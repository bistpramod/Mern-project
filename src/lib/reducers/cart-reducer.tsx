import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IProductDetail } from "../../pages/product/AllProductList";
import axiosInstance from "../../config/ApiClient";

export interface ISingleCart {
  productId: number;
  quantity: number;
  title?: string, 
  description?: string,
  price: string | number, 
  image?: string
}

interface ICartState {
  cartDetail: null | Array<ISingleCart>,
  productDetail: IProductDetail | null
}



export const getProductDetail = createAsyncThunk("cart/getProductDetail", async({args}: {args: {id: string}}) => {
  const productDetail = await axiosInstance.get("/products/"+args.id)
  return productDetail
});




const CartSlicer = createSlice({
  name: "cart",
  initialState: {
    cartDetail: null,
    productDetail: null
  } as ICartState,

  reducers: {
   setCartItems: (state, action) => {
    // 
    const oldCart = state.cartDetail?.length ? [...state.cartDetail] :  [];
    
    if(oldCart.length === 0) {
      oldCart.push(action.payload)
    } else {
      
      let index = null; 
      oldCart.forEach((cart, idx) => {
        if(cart.productId === action.payload.productId) {
          index = idx;
        }
      })
      if(index !== null) {
        oldCart[index].quantity += +action.payload.quantity
      } else {
        oldCart.push(action.payload)
      }
    }
    localStorage.setItem('cart', JSON.stringify(oldCart))
    state.cartDetail = oldCart
   },

   removeFromCart:(state, action) => {
    const oldCart = state.cartDetail?.length ? [...state.cartDetail] : [];

    if(oldCart.length <= 0) {
      state.cartDetail = []
    }else {
      const currentItem = oldCart[action.payload.index];
      if(currentItem.quantity === action.payload.quantity) {
        // remove from cart 
        oldCart.splice(action.payload.index, 1)
      } else {
        oldCart[action.payload.index].quantity = oldCart[action.payload.index].quantity - action.payload.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(oldCart))
      state.cartDetail = [...oldCart]
    }
   },
   
   loadFromLocalStorage: (state) =>{
    let cart = localStorage.getItem("cart") || []
    if(typeof cart === 'string' && cart) {
      cart = JSON.parse(cart);
    }
    state.cartDetail = [...cart] as unknown as Array<ISingleCart>;
   }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.productDetail =action.payload as unknown as IProductDetail
    })
    builder.addCase(getProductDetail.rejected, (state) => {
      state.productDetail = null;
    });
  }
})

// export 
export const { setCartItems, loadFromLocalStorage, removeFromCart } =
  CartSlicer.actions;
export default CartSlicer.reducer