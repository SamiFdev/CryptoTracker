import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "../features/coinSlice";
import singleCoinSlice from "../features/singleCoinSlice";

export const store = configureStore({
    reducer: {
        coins: coinSlice,
        aSearchedCoin: singleCoinSlice,
    },
});
