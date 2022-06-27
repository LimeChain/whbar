import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';

import icon_01 from '../public/icons/icon-01.svg';
import icon_03 from '../public/icons/icon-03.svg';
import icon_04 from '../public/icons/icon-04.svg';
import icon_05 from '../public/icons/icon-05.svg';
import icon_06 from '../public/icons/icon-06.svg';
import icon_07 from '../public/icons/icon-07.svg';
import icon_08 from '../public/icons/icon-08.svg';
import image_01 from '../public/image-01.png';
import logo from '../public/logo.svg';
import Links from '../components/Links';
// import logo_3D from '../public/logo-3D.png';

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
        <title>wHBAR.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="HBAR dressed as an ERC20, removing the barrier to Hedera SCS dApps"
        ></meta>

        <meta property="og:url" content="https://www.whbar.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="wHBAR.io" />
        <meta
          property="og:description"
          content="HBAR dressed as an ERC20, removing the barrier to Hedera SCS dApps"
        />
        <meta property="og:image" content="https://whbar.io/wHABR_og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="whbar.io" />
        <meta property="twitter:url" content="https://www.whbar.io/" />
        <meta name="twitter:title" content="wHBAR.io" />
        <meta
          name="twitter:description"
          content="HBAR dressed as an ERC20, removing the barrier to Hedera SCS dApps"
        />
        <meta name="twitter:image" content="https://whbar.io/wHABR_og-image.png" />

        <link rel="canonical" href="https://whbar.io" />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>

      {/* Header */}
      <div className="container-header-wrapper">
        <div className={`container-sticky ${scroll ? 'is-sticky' : null}`}>
          <div className="container">
            <div className="container-header p-2 p-lg-5 d-flex justify-content-between align-items-center">
              <div>
                <a href="#">
                  <Image width={44} height={44} src={logo} alt="logo" />
                </a>
              </div>

              <div className="d-flex align-items-center">
                <a className="text-menu link p-4" href="#details">
                  Details
                </a>
                <a className="text-menu link p-4" href="#wrapping">
                  Wrapping 101
                </a>
                <a className="text-menu link p-4" href="#conclusion">
                  Conclusion
                </a>

                <span className="mx-4 d-none d-lg-block">|</span>

                <Links className="d-none d-lg-flex" />
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
                It’s a vital piece of the Hedera ecosystem that allows for Hedera HBAR holders to
                fully utilise dApps developed on the Hedera Smart Contract Service.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What is WHBAR */}

      {/* Details */}
      <div id="details">
        <div className="container py-10 py-xl-15 container-details">
          <h2 className="text-title text-bold text-center">Here are the details</h2>

          <div className="row mt-10 mt-lg-15 align-items-center">
            <div className="col-lg-4 offset-xl-2 col-xl-3 text-center text-xl-start">
              <Image src={icon_01} alt="" />
            </div>
            <div className="col-lg-8 col-xl-5 mt-5 mt-lg-0 text-center text-lg-start">
              <h3 className="text-title">HBAR</h3>
              <p className="text-main mt-2">
                <span className="text-bold">HBAR</span> is Hedera Hashgraph’s native currency and as
                such can be used freely across the Hedera Services. However, it does not conform to
                the standard that EVM dApps normally use.
              </p>
            </div>
          </div>

          <div className="row mt-10 mt-lg-15 align-items-center">
            <div className="col-lg-4 col-xl-3 text-center">
              <Image src={icon_03} alt="" />
            </div>
            <div className="col-lg-8 offset-xl-2 col-xl-5 mt-5 mt-lg-0 order-lg-first text-center text-lg-start">
              <h3 className="text-title">ERC-20</h3>
              <p className="text-main mt-2">
                <span className="text-bold">ERC-20</span> is the fungible token standard used on EVM
                networks. It defines what a token is, how they are transferred and adds additional
                properties such as approving someone else to spend your tokens. It is the most
                widely used standard within Web3 dApps.
              </p>
            </div>
          </div>

          <div className="row mt-10 mt-lg-15 align-items-center">
            <div className="col-lg-4 offset-xl-2 col-xl-3 text-center text-xl-start">
              <Image src={icon_04} alt="" />
            </div>
            <div className="col-lg-8 col-xl-5 mt-5 mt-lg-0 text-center text-lg-start">
              <h3 className="text-title">Access</h3>
              <p className="text-main mt-2">
                Since <span className="text-bold">HBAR</span> is a{' '}
                <span className="text-bold">native currency</span> built on the Hedera Hashgraph
                prior to the existence of ERC-20, it does not support the standard. This is where
                wHBAR comes into play!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Details */}

      {/* Wrapping */}
      <div id="wrapping">
        <div className="container py-10 py-xl-15">
          <div className="row mb-5 mb-lg-7">
            <div className="col-lg-10 offset-lg-1">
              <h2 className="text-title text-bold">Wrapping 101</h2>
              <p className="text-main mt-5">
                Wrapping allows us to use native currencies that would otherwise be unsupported
                within a dApp. Here’s how it works:
              </p>
            </div>
          </div>

          <Carousel
            centerMode={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            swipeable={false}
          >
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="container-slide">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <Image src={icon_05} alt="" />
                    </div>
                    <div className="col-lg-6">
                      <p className="text-main mt-5">
                        When wrapping, the original HBARs are being deposited in a smart contract
                        and an ERC-20 representation of the HBAR is minted back to the depositor.
                        The key here is that these new ‘wrapped’ tokens are ERC-20 compliant, thus
                        they can be used throughout dApps easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="container-slide">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <Image src={icon_06} alt="" />
                    </div>
                    <div className="col-lg-6">
                      <p className="text-main mt-5">
                        In our case, wHBAR is the ERC-20 version of the HBAR token, which makes it
                        compatible with all dApps that support that standard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="container-slide">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <Image src={icon_08} alt="" />
                    </div>
                    <div className="col-lg-6">
                      <p className="text-main mt-5">
                        If you, at any point, decide to redeem your wrapped HBARs, you can do that
                        by depositing your wHBARs. The same amount of HBARs will be sent back to
                        your address in exchange for the provided wHBARs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* Wrapping */}

      {/* Conclusion */}
      <div id="conclusion">
        <div className="container text-center py-10 py-xl-15">
          <div className="row">
            <div className="offset-xl-2 col-xl-8">
              <h2 className="text-hero text-bold">
                To <span className="text-gradient">wrap</span> things up
              </h2>
              <p className="text-main mt-5">
                wHBAR is an ERC-20 token that can be issued when HBARs are provided. Every wHBAR is
                issued 1:1 with the amount of HBARs deposited. ERC-20 HBAR representation enables
                the usage of HBAR throughout Hedera SCS dApps.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Conclusion */}

      {/* Heliswap */}
      {/* <div className="py-10 py-xl-15">
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
      </div> */}
      {/* Heliswap */}

      <Footer />
    </div>
  );
}
