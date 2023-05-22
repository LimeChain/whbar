import { ethers } from 'ethers';
import { hethers } from '@hashgraph/hethers';
import Staker from '../artifacts/contracts/Staker.sol/Staker.json' assert { type: 'json' };

const provider = new ethers.providers.JsonRpcProvider('https://testnet.hashio.io/api');

const staker = new ethers.Contract(
  '0x0000000000000000000000000000000000CB7999',
  Staker.abi,
  provider,
);

const owner = await staker.owner();
console.log('owner', owner);

const amount = hethers.utils.parseHbar('0');
await staker.withdraw(amount, '0x0000000000000000000000000000000000001B74');
// console.log('staker', staker);
