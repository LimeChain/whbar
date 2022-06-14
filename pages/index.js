import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Carousel } from 'react-responsive-carousel';

import icon_01 from '../public/icons/icon-01.svg';
import icon_02 from '../public/icons/icon-02.svg';
import icon_03 from '../public/icons/icon-03.svg';
import icon_04 from '../public/icons/icon-04.svg';
import icon_05 from '../public/icons/icon-05.svg';
import icon_06 from '../public/icons/icon-06.svg';
import icon_07 from '../public/icons/icon-07.svg';
import icon_08 from '../public/icons/icon-08.svg';
import image_01 from '../public/image-01.svg';
import logo from '../public/logo.svg';
import logo_3D from '../public/logo-3D.svg';

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>wHBAR Landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Header */}
      <div className="container-header-wrapper">
        <div className={`container-sticky ${scroll ? 'is-sticky' : null}`}>
          <div className="container">
            <div className="container-header p-2 p-lg-5 d-flex justify-content-between align-items-center">
              <div>
                <a href="#">
                  <Image src={logo} alt="logo" />
                </a>
              </div>

              <div>
                <a className="text-menu link p-3" href="#details">
                  Details
                </a>
                <a className="text-menu link p-3" href="#wrapping">
                  Wrapping 101
                </a>
                <a className="text-menu link p-3" href="#conclusion">
                  Conclusion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}

      {/* What is WHBAR */}
      <div className="py-5 py-lg-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-4 text-center">
              <Image src={image_01} alt="logo" />
            </div>

            <div className="col-lg-7 offset-xl-1 col-xl-6 mt-5 mt-lg-0 order-lg-first">
              <h1 className="text-hero text-bold">
                What is <span className="text-gradient">wHBAR</span>
              </h1>
              <h2 className="text-title">and why do you need it?</h2>
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
      {/* What is WHBAR */}

      {/* Details */}
      <div id="details">
        <div className="container py-10 container-details">
          <h2 className="text-title text-bold text-center">Here are the details</h2>

          <div className="row mt-10 align-items-center">
            <div className="col-lg-4 offset-xl-2 col-xl-3 text-center text-xl-start">
              <Image src={icon_01} alt="" />
            </div>
            <div className="col-lg-8 col-xl-5 mt-5 mt-lg-0 text-center text-lg-start">
              <h3 className="text-title">HBAR</h3>
              <p className="text-main mt-2">
                <span className="text-bold">HBAR is Hedera Hashgraph’s native token</span> and as
                such can be used freely across the Hedera ecosystem. However, it cannot be used in
                other Web3 networks. Why? Well...
              </p>
            </div>
          </div>

          <div className="row mt-10 align-items-center">
            <div className="col-lg-4 col-xl-3 text-center">
              <Image src={icon_02} alt="" />
            </div>
            <div className="col-lg-8 offset-xl-2 col-xl-5 mt-5 mt-lg-0 order-lg-first text-center text-lg-start">
              <h3 className="text-title">Tokens</h3>
              <p className="text-main mt-2">
                <span className="text-bold">..tokens</span>. do not usually travel between Web3
                networks. This is because different Web3 protocols generally use different token
                standards, which makes them incompatible.
              </p>
            </div>
          </div>

          <div className="row mt-10 align-items-center">
            <div className="col-lg-4 offset-xl-2 col-xl-3 text-center text-xl-start">
              <Image src={icon_03} alt="" />
            </div>
            <div className="col-lg-8 col-xl-5 mt-5 mt-lg-0 text-center text-lg-start">
              <h3 className="text-title">ERC-20</h3>
              <p className="text-main mt-2">
                <span className="text-bold">
                  ERC-20 is the fungible token standard used on Ethereum
                </span>{' '}
                , the go-to platform for DeFi and other decentralized applications. It defines how
                tokens are transferred and how to keep a consistent record of those transfers among
                Ethereum network accounts.
              </p>
            </div>
          </div>

          <div className="row mt-10 align-items-center">
            <div className="col-lg-4 col-xl-3 text-center">
              <Image src={icon_04} alt="" />
            </div>
            <div className="col-lg-8 offset-xl-2 col-xl-5 mt-5 mt-lg-0 order-lg-first text-center text-lg-start">
              <h3 className="text-title">Access</h3>
              <p className="text-main mt-2">
                Since Hedera Hashgraph does not support the ERC-20 standard, you cannot use your
                HBAR tokens to access DeFi products running on Ethereum or other EVM (Ethereum
                Virtual Machine)-compatible networks. Seems inconvenient? Well, fret not! This is
                where wHBAR comes into play!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Details */}

      {/* Wrapping */}
      <div id="wrapping">
        <div className="container py-10">
          <div className="row mb-5 mb-lg-7">
            <div className="col-lg-6 offset-xl-1 col-xl-5">
              <h2 className="text-title text-bold">Wrapping 101</h2>
              <p className="text-main mt-5">
                So <span className="text-gradient text-bold">what is ‘wrapping’</span> and how does
                this help us with our incompatibility problem? Well, wrapping allows us to use
                crypto assets that would otherwise be unsupported on a non-native chain. Here’s how
                it works:
              </p>
            </div>
          </div>

          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <Carousel
                centerMode={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
              >
                <div className="mt-5 mt-lg-9 d-lg-flex">
                  <div className="col-lg-6 container-slide p-6">
                    <Image src={icon_05} alt="" />
                    <p className="text-main mt-5">
                      When wrapping, the original tokens are locked in a smart contract and new
                      tokens of equivalent value are minted. The key here is that these new
                      ‘wrapped’ tokens are of a standard supported by the target chain and, as such,
                      can be used on that chain.{' '}
                    </p>
                  </div>

                  <div className="col-lg-6 container-slide p-6 mt-5 mt-lg-0">
                    <Image src={icon_06} alt="" />
                    <p className="text-main mt-5">
                      In our case, wHBAR is the ERC-20 version of the HBAR token, which makes it
                      compatible with all networks that support that standard, including Ethereum.
                    </p>
                  </div>
                </div>

                <div className="mt-5 mt-lg-9 d-lg-flex">
                  <div className="col-lg-6 container-slide p-6">
                    <Image src={icon_07} alt="" />
                    <p className="text-main mt-5">
                      Wrapped tokens can be easily transferred between networks via bridges such as
                      the Hashport portal, which connects Hedera Hashgraph with Ethereum and other
                      EVM networks.
                    </p>
                  </div>

                  <div className="col-lg-6 container-slide p-6 mt-5 mt-lg-0">
                    <Image src={icon_08} alt="" />
                    <p className="text-main mt-5">
                      If you, at any point, decide to redeem your wrapped tokens, those assets are
                      burnt on the target chain and an equivalent amount of original tokens are
                      unlocked on the native chain.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Wrapping */}

      {/* Conclusion */}
      <div id="conclusion">
        <div className="container text-center py-10">
          <div className="row">
            <div className="offset-xl-2 col-xl-8">
              <h2 className="text-hero text-bold">
                To <span className="text-gradient">wrap</span> things up
              </h2>
              <p className="mt-5">
                WHBAR is an important tool that makes it possible for Hedera users to effortlessly
                participate in the broader Web3 ecosystem. It boosts interoperability, allows
                cross-chain involvement in various protocols and ecosystems and marks the start of
                something great.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Conclusion */}

      {/* Heliswap */}
      <div className="py-10">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="container-heliswap">
                <div className="row align-items-center">
                  <div className="col-lg-6 text-center text-lg-end">
                    <Image src={logo_3D} alt="" />
                  </div>

                  <div className="col-lg-6 mt-5 mt-lg-0 order-lg-first">
                    <h2 className="text-title text-white text-bold">Swap soon on Heliswap</h2>
                    <p className="text-main text-white mt-5">
                      The first DEX for the Hedera ecosystem supporting cross-chain swaps between
                      the Hedera and Ethereum ecosystems.
                    </p>
                    <div className="mt-5 mt-lg-7 text-center text-lg-start">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://heli-swap-landing-page.vercel.app/"
                        className="btn btn-white"
                      >
                        Go to heliswap
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heliswap */}

      {/* Footer */}
      <hr />
      <div className="py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-lg-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#">
                    <Image src={logo} alt="logo" />
                  </a>

                  <ul className="d-flex ms-5">
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link p-3">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center mt-5 mt-lg-0 ms-lg-10">
                  <a href="#" className="icon-social is-twitter mx-3"></a>
                  <a href="#" className="icon-social is-telegram mx-3"></a>
                  <a href="#" className="icon-social is-discord "></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <p className="text-micro text-lg-end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
