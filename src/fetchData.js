const axios = require("axios");
// const DATA = "https://arcane-ravine-11965.herokuapp.com/api/pairs";
const DATA = '/dummy-data.json'

  export const fetchData = async () => {
    try {
      const res = await axios.get(DATA);
      const converted = res.data.map((row) => {
        const {
          marketBuyVolume,
          netHigh,
          symbol,
          netBuyVsSell,
          percentNet,
          marketSellVolume,
          lowMarketBuys,
          midMarketSells,
          highMarketSells,
          highMarketBuys,
          netLow,
          netVolume,
          averageTradeSize,
          netMid,
          totalTrades,
          midMarketBuys,
          lowMarketSells,
        } = row;
        return {
          marketBuyVolume: parseInt(marketBuyVolume),
          netHigh: parseInt(netHigh),
          symbol,
          netBuyVsSell: parseInt(netBuyVsSell),
          percentNet: parseInt(percentNet),
          marketSellVolume: parseInt(marketSellVolume),
          lowMarketBuys: parseInt(lowMarketBuys),
          midMarketsells: parseInt(midMarketSells),
          highMarketSells: parseInt(highMarketSells),
          highMarketBuys: parseInt(highMarketBuys),
          netLow: parseInt(netLow),
          netVolume: parseInt(netVolume),
          averageTradeSize: parseInt(averageTradeSize),
          netMid: parseInt(netMid),
          totalTrades: parseInt(totalTrades),
          midMarketBuys: parseInt(midMarketBuys),
          lowMarketSells: parseInt(lowMarketSells),
        };
      });

      return converted
    } catch (err) {
       console.log(err);
      return;
    }

  };