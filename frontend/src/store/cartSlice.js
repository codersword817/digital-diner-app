import { createSlice } from "@reduxjs/toolkit";

const cartDataStore = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.forEach((e, idx) => {
                if (e.id === action.payload) {
                    state.items.splice(idx, 1);
                }
            });
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartDataStore.actions;
export default cartDataStore.reducer;