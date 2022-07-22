import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    fetched: false,
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addNewFavorite: (state, action) => {
            // expected payload: new coin id
            // make a copy of state, spread in the new coin
            const copiedState = [...state.data, action.payload];
            state.data = copiedState;
            localStorage.setItem("favoriteCoinIds", copiedState);
        },
        removeExistingFavorite: (state, action) => {
            // expected payload: coin id to remove
            const newFavoritesArray = [...state.data];
            const indexToRemove = newFavoritesArray.indexOf(action.payload);
            newFavoritesArray.splice(indexToRemove, 1);
            console.log(newFavoritesArray);
            state.data = newFavoritesArray;
            localStorage.setItem("favoriteCoinIds", newFavoritesArray);
        },
        removeAllExistingFavorites: (state) => {
            localStorage.removeItem("favoriteCoinIds");
            state = initialState;
        },
        importSavedFavorites: (state) => {
            // expected payload: array of existing coin ids from localstorage
            const userStoredCoins = localStorage.getItem("favoriteCoinIds");
            const storedCoinsArray = userStoredCoins?.length
                ? userStoredCoins.split(",")
                : [];
            state.data = storedCoinsArray;
            state.fetched = true;
        },
    },
});
export const {
    updateFavorites,
    importSavedFavorites,
    addNewFavorite,
    removeExistingFavorite,
    removeAllExistingFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
