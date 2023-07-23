import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        stripePrice: '',
    },
};

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {
        addStripePrice: (state, action) => {
            state.value.stripePrice = action.payload;
        }
    },
});


export const { addStripePrice } = burgersSlice.actions;
export default burgersSlice.reducer;