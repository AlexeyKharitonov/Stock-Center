import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("PRODUCTS")) || [],
};

const OrdersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addOrder(state, action) {
      state.items.push(action.payload);
      localStorage.setItem("PRODUCTS", JSON.stringify(state.items));
    },
  },
});

export const { addOrder } = OrdersSlice.actions;
export default OrdersSlice.reducer;

export const getAllOrders = (state) => state.items.orders;
