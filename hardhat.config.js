require("@nomiclabs/hardhat-waffle");

const INFURA_API_KEY = "2b692c3bb95148bb8333710a4c51918a";
const ROPSTEN_PRIVATE_KEY = "8f171d0ba3541dad5e3b09c8ee22a367c3c01dbd038e3ed8e7d2469ae132ae0e";
const ETHERSCAN_API_KEY = "6WFC9K5C8E2RC9UF1XIM6ZUG17DHWPIX3N";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};
