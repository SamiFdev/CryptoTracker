import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        // updateFavorites: (state, action) => {
        //     localStorage.setItem("favoriteCoinIds", action.payload);
        //     state.data = action.payload;
        // },
        addNewFavorite: (state, action) => {
            // expected payload: new coin id
            // make a copy of state, spread in the new coin
            const copiedState = [...state.data, action.payload];
            // add copy with new coin to LS
            // update redux state with copy with new coin
            localStorage.setItem("favoriteCoinIds", action.payload);
            copiedState.data = action.payload;
            localStorage.setItem("favoriteCoinIds", copiedState);

            // have to check if coin already exists in LS "favoriteCoinIds", prior to adding it again.

            // If it already exists either disable the add to favorites button or display the star filled in (different styling than when it isn't saved)

            //if coin doesn't already exist in local storage clicking the button/icon will save it to "favoriteCoinnIds"
        },
        removeExistingFavorite: (state, action) => {
            // expected payload: coin id to remove
            // 1. find coin id in state, remove it (look this up)
            // 2. once you have new array without the removed coin id, update redux + ls
            // looking to find a specific id inside of "favorites" state. Then remove the id out of the array inside state - looked into splice and removing by index (not sure if that is how it is done but wasn't able to get it working )
            // once the id is removed, update redux state and LS to reflect the new array that doesn't include the just removed id
            // created a removeFavorite function inside Favorites index.js that dispatches this function on click of (star icon) - temporarily.
        },
        removeAllExistingFavorites: (state) => {
            localStorage.removeItem("favoriteCoinIds");
            state = initialState;
        },
        importSavedFavorites: (state) => {
            // expected payload: array of existing coin ids from localstorage
            const userStoredCoins = localStorage.getItem("favoriteCoinIds");
            const storedCoinsArray = userStoredCoins?.split(",") || "";
            state.data = storedCoinsArray;
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
