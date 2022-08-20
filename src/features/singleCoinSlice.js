import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleCoin = createAsyncThunk(
    "coins/fetchSingleCoin",
    async (id, thunkAPI) => {
        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
        ).then((res) => res.json());
        return data;
    }
);

const initialState = {
    data: [],
    error: false,
    loading: false,
};

export const singleCoinSlice = createSlice({
    name: "singleCoinSearch",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSingleCoin.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSingleCoin.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload[0];
        },
        [fetchSingleCoin.rejected]: (state) => {
            state.error = true;
            state.loading = false;
        },
    },
});
export const { savedSearch } = singleCoinSlice.actions;

export default singleCoinSlice.reducer;
