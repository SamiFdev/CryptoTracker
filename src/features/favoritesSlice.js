import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        updateFavorites: (state, action) => {
            localStorage.setItem("favoriteCoinIds", action.payload);
            state.data = action.payload;
        },
    },
});
export const { updateFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
