require('hardhat-hethers');
const config = require('./config');
const { task } = require('hardhat/config');

task('deployWhbar', 'Deploys WHBAR instance').setAction(async () => {
  const whbarDeployment = require('./scripts/deploy-whbar');
  await whbarDeployment();
});

task('withdraw', 'Withdraw WHBAR from Staker').setAction(async () => {
  const withdrawHbar = require('./scripts/withdraw-hbar');
  await withdrawHbar();
});

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.4.18',
      },
      {
        version: '0.8.0',
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  hedera: {
    networks: config.networks,
    gasLimit: 3000000,
  },
  defaultNetwork: 'testnet',
};
