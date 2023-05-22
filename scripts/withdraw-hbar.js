const hardhat = require('hardhat');

async function withdraw() {
  console.log(`Withdrawing from Staker...`);
  // const staker = await hardhat.hethers.getContractAt('Staker', '0.0.10605999');
  const staker = await hardhat.hethers.getContractAt(
    'Staker',
    '0x0000000000000000000000000000000000Cb7b59',
  );
  console.log('staker', staker);
  // const owner = await staker.owner();
  // console.log('owner', owner);

  // console.log('owner', owner);
  const amount = hardhat.hethers.utils.parseHbar('0.1');
  await staker.withdraw(amount, '0x61c90019e9fb0d95cbd39cb68e0b4f217526e2da');

  console.log(`✅ Withdraw successful!`);
}

module.exports = withdraw;
