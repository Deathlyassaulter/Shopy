import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    intialState: {
        product: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action ) => {
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducers;