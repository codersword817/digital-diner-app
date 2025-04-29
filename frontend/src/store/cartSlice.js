import { createSlice } from "@reduxjs/toolkit";

const cartDataStore = createSlice({
    name: "cart",
    initialState: {
        items: {},
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const id = item._id;

            if (state.items[id]) {
                state.items[id].quantity += 1;
            } else {
                state.items[id] = { ...item, quantity: 1 };
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id].quantity -= 1;
                if (state.items[id].quantity <= 0) {
                    delete state.items[id];
                }
            }
        },
        clearCart: (state) => {
            state.items = {};
        },
    },
});

export const { addItem, removeItem, clearCart } = cartDataStore.actions;
export default cartDataStore.reducer;
