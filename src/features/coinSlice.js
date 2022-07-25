import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoinsByMarketCap = createAsyncThunk(
    "coins/fetchCoinsByMarketCap",
    async (thunkAPI) => {
        const data = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
        ).then((res) => res.json());
        return data;
    }
);

const initialState = {
    data: [],
    error: false,
    loading: false,
};

export const coinSlice = createSlice({
    name: "marketCapCoins",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCoinsByMarketCap.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCoinsByMarketCap.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [fetchCoinsByMarketCap.rejected]: (state) => {
            state.error = true;
            state.loading = false;
        },
    },
});

export default coinSlice.reducer;
