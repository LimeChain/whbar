import {
  Client,
  PrivateKey,
  AccountId,
  ContractCreateFlow,
  ContractUpdateTransaction,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  ContractInfoQuery,
} from '@hashgraph/sdk';
import * as dotenv from 'dotenv';
import BigNumber from 'bignumber.js';

import WHBAR from '../artifacts/contracts/WHBAR.sol/WHBAR.json' assert { type: 'json' };
import Staker from '../artifacts/contracts/Staker.sol/Staker.json' assert { type: 'json' };

dotenv.config();
console.clear();

const bytecodeWHBAR = WHBAR.bytecode;
const bytecodeStaker = Staker.bytecode;

//Grab your Hedera testnet account ID and private key from your .env file
const myAccountId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
const myPrivateKey = PrivateKey.fromStringECDSA(process.env.MY_PRIVATE_KEY);

// Functions
const getClient = () => {
  // If we weren't able to grab it, we should throw a new error
  if (!myAccountId || !myPrivateKey) {
    throw new Error('Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present');
  }

  // Create our connection to the Hedera network
  // The Hedera JS SDK makes this really easy!
  const client = Client.forTestnet();
  // const client = Client.forMainnet();
  client.setOperator(myAccountId, myPrivateKey);

  return client;
};

// Deploy settings
const stakedNodeId = 3;
const stakeContractOwner = '0x61c90019e9fb0d95cbd39cb68e0b4f217526e2da';

const deployContract = async client => {
  console.log('⚙️ Deploying Staker contract...');
  const contractStakerDeployTx = await new ContractCreateFlow()
    .setBytecode(bytecodeStaker)
    .setGas(3_000_000)
    .setStakedNodeId(stakedNodeId)
    .setConstructorParameters(new ContractFunctionParameters().addAddress(stakeContractOwner))
    .setAdminKey(myPrivateKey)
    .setAutoRenewAccountId(myAccountId)
    .setAutoRenewPeriod(7862400)
    .execute(client);

  const contracStakertDeployRx = await contractStakerDeployTx.getReceipt(client);
  const contractStakerId = contracStakertDeployRx.contractId;

  console.log('✅ Contract Staker deployed!');
  console.log('☝️ Contract Id: ', contractStakerId.toString());

  console.log('⚙️ Deploying WHBAR contract...');
  const contractWHBARDeployTx = await new ContractCreateFlow()
    .setBytecode(bytecodeWHBAR)
    .setGas(3_000_000)
    .setStakedAccountId(contractStakerId.toString())
    .setAutoRenewAccountId(myAccountId)
    .setAutoRenewPeriod(7862400)
    .execute(client);

  const contractDeployRx = await contractWHBARDeployTx.getReceipt(client);
  const contractId = contractDeployRx.contractId;

  console.log('✅ Contract deployed!');
  console.log('☝️ Contract Id: ', contractId.toString());
};

const updateContract = async client => {
  const contractUpdateTx = new ContractUpdateTransaction()
    .setContractId('0.0.3928203')
    // .setStakedAccountId(stakeAccount) // SET THIS ONE...
    .setStakedNodeId(3) // OR THIS ONE - DON'T SET BOTH
    .setDeclineStakingReward(false)
    // .setAdminKey(adminKey)
    // .setContractMemo(memo)
    // .setAutoRenewAccountId(autoRenewAccountId)
    // .setAutoRenewPeriod(autoRenewPeriod)
    // .setContractExpirationTime(expirationTime)
    // .setMaxAutomaticTokenAssociations(amount)
    .freezeWith(client);
  const contractUpdateSign = await contractUpdateTx.sign(myPrivateKey);
  const contractUpdateSubmit = await contractUpdateSign.execute(client);
  const contractUpdateRx = await contractUpdateSubmit.getReceipt(client);

  console.log('contractUpdateRx.status', contractUpdateRx.status);
};

const formatStringToBigNumberWei = (numberToFormat, decimals = 18) => {
  const numberToFormatBN = new BigNumber(numberToFormat);

  const tenPowDec = new BigNumber(10).pow(decimals);

  return numberToFormatBN.times(tenPowDec);
};

const depositHBAR = async (client, contractId) => {
  console.log('⚙️ Depositing HBAR...');
  const wrappTrans = new ContractExecuteTransaction()
    //Set the ID of the contract
    .setContractId(contractId)
    //Set the gas for the contract call
    .setGas(3000000)
    //Amount of HBAR we want to provide
    .setPayableAmount(1000)
    //Set the contract function to call
    .setFunction('deposit', new ContractFunctionParameters())
    .freezeWith(client);
  const contractWrapSign = await wrappTrans.sign(myPrivateKey);
  const contractWrapSubmit = await contractWrapSign.execute(client);
  const contractWrapRx = await contractWrapSubmit.getReceipt(client);
  console.log('✅ HBAR deposited!');
  console.log('☝️ Transaction status: ', contractWrapRx.status);
};

const getContractInfo = async (client, contractId) => {
  const accountInfo = await new ContractInfoQuery().setContractId(contractId).execute(client);
  console.log(`- Staking info:`);
  console.log(`-- stakedAccountId: ${accountInfo.stakingInfo.stakedAccountId}`);
  console.log(`-- stakedNodeId: ${accountInfo.stakingInfo.stakedNodeId}`);
  console.log(`-- declineStakingReward: ${accountInfo.stakingInfo.declineStakingReward}`);
  console.log(`-- pendingReward: ${accountInfo.stakingInfo.pendingReward}`);
  console.log(`-- stakePeriodStart: ${accountInfo.stakingInfo.stakePeriodStart}`);
  console.log(`-- stakedToMe: ${accountInfo.stakingInfo.stakedToMe}`);
};

const client = getClient();

// await deployContract(client);
// await depositHBAR(client, '0.0.13337503');

await getContractInfo(client, '0.0.13337500');
await getContractInfo(client, '0.0.13337503');

/*
- Staking info for 0.0.13337500 (Staker):
-- stakedAccountId: null
-- stakedNodeId: 3
-- declineStakingReward: false

- Staking info from 0.0.13337503 (WHBAR):
-- stakedAccountId: 0.0.13337500
-- stakedNodeId: null
-- declineStakingReward: false
*/
