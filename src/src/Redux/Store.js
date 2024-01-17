import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "./Orders/OrdersSlice";

export const store = configureStore({
  reducer: {
    orders: OrdersSlice,
  },
});
