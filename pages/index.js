import Head from 'next/head';
import Image from 'next/image';

import icon_01 from '../public/icons/icon-01.svg';
import icon_02 from '../public/icons/icon-02.svg';
import icon_03 from '../public/icons/icon-03.svg';
import icon_04 from '../public/icons/icon-04.svg';
import icon_05 from '../public/icons/icon-05.svg';
import icon_06 from '../public/icons/icon-06.svg';

export default function Home() {
  return (
    <div className="py-5 py-lg-7">
      <div className="container">
        <a className="text-menu link" href="#">
          Details
        </a>
        <a className="text-menu link" href="#">
          Wrapping 101
        </a>
        <a className="text-menu link" href="#">
          Conclusion
        </a>
      </div>

      <div className="py-5 py-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-hero">
                <span className="text-bold">What is wHBAR</span> and why do you need it?
              </h1>
              <p className="text-main mt-5">
                So what is wrapped HBAR, or wHBAR, as it is known round here? It may sound like a
                delicious candy, but it’s actually (if you can believe it!) something even better.
                It’s a vital piece of the Hedera ecosystem that allows for Hedera users to access
                other protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 py-lg-7">
        <div className="container">
          <h2 className="text-title text-bold text-center">Here are the details</h2>

          <div className="row mt-5 mt-lg-7 mt-xl-12 align-items-center">
            <div className="col-lg-4 text-center">
              <Image src={icon_01} alt="" />
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <h3 className="text-title">HBAR</h3>
              <p className="text-main mt-5">
                <span className="text-bold">HBAR is Hedera Hashgraph’s native token</span> and as
                such can be used freely across the Hedera ecosystem. However, it cannot be used in
                other Web3 networks. Why? Well...
              </p>
            </div>
          </div>

          <div className="row mt-5 mt-lg-7 mt-xl-12">
            <div className="col-lg-4 text-center">
              <Image src={icon_02} alt="" />
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0 order-lg-first">
              <h3 className="text-title">Tokens</h3>
              <p className="text-main mt-5">
                <span className="text-bold">..tokens</span>. do not usually travel between Web3
                networks. This is because different Web3 protocols generally use different token
                standards, which makes them incompatible.
              </p>
            </div>
          </div>

          <div className="row mt-5 mt-lg-7 mt-xl-12">
            <div className="col-lg-4 text-center">
              <Image src={icon_03} alt="" />
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <h3 className="text-title">ERC-20</h3>
              <p className="text-main mt-5">
                <span className="text-bold">
                  ERC-20 is the fungible token standard used on Ethereum
                </span>{' '}
                , the go-to platform for DeFi and other decentralized applications. It defines how
                tokens are transferred and how to keep a consistent record of those transfers among
                Ethereum network accounts.
              </p>
            </div>
          </div>

          <div className="row mt-5 mt-lg-7 mt-xl-12">
            <div className="col-lg-4 text-center">
              <Image src={icon_04} alt="" />
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0 order-lg-first">
              <h3 className="text-title">Access</h3>
              <p className="text-main mt-5">
                Since Hedera Hashgraph does not support the ERC-20 standard, you cannot use your
                HBAR tokens to access DeFi products running on Ethereum or other EVM (Ethereum
                Virtual Machine)-compatible networks. Seems inconvenient? Well, fret not! This is
                where wHBAR comes into play!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 py-lg-7">
        <div className="container">
          <div>
            <h2 className="text-title text-bold">Wrapping 101</h2>
            <p className="text-lead mt-5">
              So what is ‘wrapping’ and how does this help us with our incompatibility problem?
              Well, wrapping allows us to use crypto assets that would otherwise be unsupported on a
              non-native chain. Here’s how it works:
            </p>
          </div>

          <div className="mt-5 mt-lg-9 row">
            <div className="col-lg-6">
              <Image src={icon_05} alt="" />
              <p className="text-main mt-5">
                When wrapping, the original tokens are locked in a smart contract and new tokens of
                equivalent value are minted. The key here is that these new ‘wrapped’ tokens are of
                a standard supported by the target chain and, as such, can be used on that chain.{' '}
              </p>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <Image src={icon_06} alt="" />
              <p className="text-main mt-5">
                In our case, wHBAR is the ERC-20 version of the HBAR token, which makes it
                compatible with all networks that support that standard, including Ethereum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 py-lg-7">
        <div className="container">
          <h2 className="text-title text-bold">To wrap things up</h2>
          <p className="text-lead mt-5">
            WHBAR is an important tool that makes it possible for Hedera users to effortlessly
            participate in the broader Web3 ecosystem. It boosts interoperability, allows
            cross-chain involvement in various protocols and ecosystems and marks the start of
            something great.
          </p>
        </div>
      </div>

      <div className="py-5 py-lg-7">
        <div className="container text-center">
          <h2 className="text-title text-bold">Swap soon on Heliswap</h2>
          <p className="text-lead mt-5">
            <span className="text-bold">Heliswap is the first DEX</span> for the Hedera ecosystem
            that will allow you to swap tokens and earn LP rewards.
          </p>
          <div className="text-center mt-5 mt-lg-7">
            <a href="#" className="btn btn-primary">
              Go to heliswap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
