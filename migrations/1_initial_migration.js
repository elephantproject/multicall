const MULTICALL2 = artifacts.require("Multicall2.sol");

module.exports = function (deployer) {
  deployer.deploy(MULTICALL2);
};
