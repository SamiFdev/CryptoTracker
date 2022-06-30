import axios from "axios";

const BASE_ENDPOINT =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

export const getTopMarketCapCoins = async () => {
    const url = `${BASE_ENDPOINT}&order=market_cap_desc&per_page=100&page=1`;
    try {
        const response = await axios.get(url);
        console.log("api", response);
        return response.data;
    } catch (error) {
        console.log(error);
        //TODO handle error
    }
};

export const getCoinFromSearch = async (id) => {
    console.log(id);
    const url = `${BASE_ENDPOINT}&ids=${id}`;
    try {
        const response = await axios.get(url);
        console.log(response.data[0]);
    } catch (error) {
        console.log(error);
    }
};
