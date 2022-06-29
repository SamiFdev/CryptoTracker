import { useState, useEffect } from "react";
import axios from "axios";
import { getCoinFromSearch } from "./Api";

function MarketCapFetch() {
    const [marketCap, setmarketCap] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
            )
            .then((res) => {
                console.log(res);
                setmarketCap(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ul>
                {marketCap.map((coin) => (
                    <li key={coin.id}>
                        {coin.symbol}
                        {coin.name}
                        {coin.current_price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MarketCapFetch;
