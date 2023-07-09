import { createSlice } from '@reduxjs/toolkit'
import { Product } from '@/api/product/request'
import { AppDispatch } from '@/store'
export const accessProductSlice = createSlice({
  name: 'accessProduct',
  initialState: {
    product: null,
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload
    },
    getProducts: (state, action) => {
      state.products = action.payload
    }
  },
})

export const { addProduct, getProducts } = accessProductSlice.actions


export const productAsync = (params: any) => async(dispatch: AppDispatch) => {

  try {
    const response = await new  Product().addProduct(params);
    if(response) {
      dispatch(addProduct(response))
    } else
    throw new Error();
  }catch(e) {
    console.log(e);
  }
 
}
export const getProductsAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await new Product().getProducts();
    if (response) {
      dispatch(getProducts(response));
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
  }
};


export const selectProducts = (state: any) => state.accessProductReducer.products;
export const selectProduct = (state: any) => state.accessProductReducer.product;

export default accessProductSlice.reducer