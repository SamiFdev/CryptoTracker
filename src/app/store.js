import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "../features/coinSlice";
import singleCoinSlice from "../features/singleCoinSlice";
import favoritesSlice from "../features/favoritesSlice";

export const store = configureStore({
    reducer: {
        coins: coinSlice,
        aSearchedCoin: singleCoinSlice,
        favorites: favoritesSlice,
    },
});

// favorites.data -> favorites.coins
