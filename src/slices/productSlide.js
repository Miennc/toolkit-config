import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {productServices} from "../services/productServices"


export const getProduct = createAsyncThunk(
    "products/getHome",
    async () => {
        const response = await productServices.getProduct();
        return response.data;
    }
)
 
const  productSlice = createSlice({
    name: "product",
    initialState: {
        homeData: [],
        loading: false,
        error: null,
    },
    reducers: {
        getProduct: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.loading = true;
        }

        ,
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.homeData = action.payload;
        }
        ,
        [getProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
})
export default productSlice.reducer;