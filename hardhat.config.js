require('hardhat-hethers');
const config = require('./config');
const { task } = require('hardhat/config');

task('deployWhbar', 'Deploys WHBAR instance').setAction(async () => {
  const whbarDeployment = require('./scripts/deploy-whbar');
  await whbarDeployment();
});

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.4.18',
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
  abiExporter: {
    only: [],
    except: ['.*Mock$'],
    clear: true,
    flat: true,
  },
  gasReporter: {
    enabled: true,
  },
};
