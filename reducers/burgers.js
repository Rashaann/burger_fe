import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        stripePrice: '',
        cart: [],
    },
};

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {
        addStripePrice: (state, action) => {
            state.value.stripePrice = action.payload;
        },
        addToCart: (state, action) => {
            if(state.value.cart.length !== 0) { //Check if array empty or not. If not -> map possible
                if(state.value.cart.some(el => el.selectedBurger.id === action.payload.selectedBurger.id)){ //If selectedBurger already added to cart, increment quantity
                    state.value.cart.map((el, i) => {
                        if(el.selectedBurger.id === action.payload.selectedBurger.id){
                            el.quantity ++;
                        }
                    });
                } else {
                    state.value.cart.push(action.payload); //else, add selectedBurger
                }
            } else {
                state.value.cart.push(action.payload);
            }
        },
        clearCart: (state, action) => {
            state.value.cart = [];
        }
    },
});


export const { addStripePrice, addToCart, clearCart } = burgersSlice.actions;
export default burgersSlice.reducer;