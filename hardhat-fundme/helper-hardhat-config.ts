export const networkConfig: any = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945"
  }
};

export const developmentChains = ["hardhat", "localhost"];
export const AGGREGATOR_DECIMALS = 8;
export const AGGREGATOR_INITIAL_VALUE = 200000000000;