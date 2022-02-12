require("@nomiclabs/hardhat-waffle");
let secret = require("./secret.json")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    avalancheTest: {
      url: secret.avaxTestnetURL,
      accounts: [secret.key]
    }
  }
};
