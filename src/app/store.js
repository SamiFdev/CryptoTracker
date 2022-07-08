import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "../features/coinSlice";

export const store = configureStore({
    reducer: {
        coins: coinSlice,
    },
});
