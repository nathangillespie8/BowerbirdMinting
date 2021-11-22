import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import abiJson from "../contract-abi.json";
import whitelistedAddress from "../address-data.json";
import logo from "../images/bb-logo.png";
import twitterLogo from "../images/twitter.svg";
import menuIcon from "../images/menu-icon.svg";
import menuClose from "../images/menu-close.svg";
import skyPeddler from "../images/sky-peddler.gif";
import usdCar from "../images/upsidedown-car.png";
import catCar from "../images/car-cat.png";
import leftMtnBack from "../images/left-mtn-back.png";
import leftMtnMid from "../images/left-mtn-mid.png";
import waterfall from "../images/waterfall.png";
import bbRolex from "../images/bb-rolex.png";
import carsPole from "../images/right-museum-cars-pole.png";
import leftBarnMid from "../images/left-barn-mid.png";
import leftBarnFront from "../images/left-barn-front.png";
import rightBgFront from "../images/right-bg-front.png";
import floatingFrame from "../images/golden-floating-frame.png";
import femaleBB from "../images/bb-female.png";
import { toast } from "react-toastify";
import hand from "../images/retro-hand.svg";

function scrollToAbout() {
  document.querySelector("#aboutSection").scrollIntoView();
}

function useInterval(callback, delay, dependencies) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, ...dependencies]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function checkWalletWhitelisted(address) {
  let walletFound = false;
  const addressJson = whitelistedAddress;
  for (var i = 0; i < addressJson.length; i++) {
    var userDetails = addressJson[i];
    walletFound =
      userDetails["Address"].toLowerCase() == address.toLowerCase()
        ? true
        : false;
    if (walletFound) {
      break;
    }
  }
  return walletFound;
}

function getTokenIdAndProofFromWallet(address) {
  const addressJson = whitelistedAddress;
  let tokenAndProof = {};
  for (var i = 0; i < addressJson.length; i++) {
    var userDetails = addressJson[i];
    if (userDetails["Address"].toLowerCase() == address.toLowerCase()) {
      let tokenAndProof = {
        token: userDetails["Token"],
        proof: userDetails["Proof"],
      };
      return tokenAndProof;
    }
  }
}

async function continuallyGetAmountSold(contract) {
  const mintCount = document.querySelector(".minting-count");
  setInterval(async function () {
    const tokensMinted = await contract.tokensMinted();
    mintCount.innerHTML = parseInt(tokensMinted, 16);
  }, 15000);
}

function openMenu() {
  document.getElementById("mmc").classList.add("active");
}

function closeMenu() {
  document.getElementById("mmc").classList.remove("active");
}

const getSigner = async () => {
  let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};

function Header() {
  const [quantity, setQuantity] = useState(1);
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const [total, setTotal] = useState(0);
  const [tokenAndProof, setTokenAndProof] = useState();

  const setProgress = async (contract) => {
    const value = await contract.tokensMinted();
    setTotal(parseInt(value, 16));
  };

  useEffect(() => {
    if (contract) {
      setInterval(() => {
        setProgress(contract);
      }, 1500);
    }
  }, [contract]);

  useEffect(() => {
    if (signer) {
      const contract = new ethers.Contract(
        "0x460d357d6F57A464D3dd50B8d4EEABAFec3BD52b",
        abiJson,
        signer
      );
      setContract(contract);
    }
  }, [signer]);

  const connect = async () => {
    const val = await getSigner();
    setSigner(val);
    const address = await val.getAddress();
    const connectBtn = document.querySelector('.connect-wallet-button');
    connectBtn.innerHTML = address;
    connectBtn.classList.add("wallet-string");
    let tokenAndProof = getTokenIdAndProofFromWallet(address.toLowerCase());
    if (!tokenAndProof) {
      toast.error("Wallet not whitelisted");
    } else {
      setTokenAndProof(tokenAndProof);
    }
  };

  const whitelistMint = async () => {
    let txHash = null;
    if (!tokenAndProof) return;

    try {
      const gasLimit = quantity * 100000;
      const itemPriceWei = Number(80000000000000000);

      const overrides = {
        value: String(Number(quantity) * Number(itemPriceWei)),
        gasLimit: gasLimit,
      };

      const proofArray = tokenAndProof.proof.split(",");

      const tx = await contract.whitelistBuy(
        quantity,
        tokenAndProof.token,
        proofArray,
        overrides
      );
      if (tx.hash) {
        toast.success("Transaction submitted successfully");
      }
      txHash = tx.hash;
    } catch (err) {
      if (err.message.includes("denied")) {
        toast.error("Transaction unsuccessful");
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <header>
        <a href="https://bowerbirdcollective.io" className="logo-link">
          <img src={logo} alt="Bower Bird Collective Logo" />
        </a>
        <span className="mob-menu-icon d-inline-block d-sm-none">
          <img src={menuIcon} alt="Mobile Menu Icon" onClick={openMenu} />
        </span>
        <div className="mob-menu-container" id="mmc">
          <span className="mob-menu-close-icon d-inline-block d-sm-none">
            <img src={menuClose} alt="Menu Close Icon" onClick={closeMenu} />
          </span>
          <nav>
            <a href="#about">About</a>
            <a href="#project">The Project</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#team">Team</a>
            {/*<a href="https://www.opensea.io/collection/bower-bird-collective" target="_blank">Open Sea</a>*/}
          </nav>
          <div className="social-links">
            <a
              className="icon-link"
              href="https://twitter.com/BowerBirdsNFT"
              target="_blank"
            >
              <img src={twitterLogo} alt="Twitter Bird Icon" />
            </a>
            <a
              className="button btn-w-discord connect-wallet-button"
              onClick={connect}
            >
              Connect Wallet
            </a>
          </div>
          <div id="wallet"></div>
        </div>
      </header>
      <section className="intro-wrap">
        <div className="inception inception-top"></div>
        <div className="inception inception-bottom"></div>
        <img
          src={skyPeddler}
          className="sky-peddler intro-animated"
          alt="Sky Peddler on Bike"
        />
        <img
          src={usdCar}
          className="usd-car intro-animated"
          alt="Upside Down Car"
        />
        <img
          src={catCar}
          className="cat-car intro-animated"
          alt="Cat Driving Car"
        />
        <img
          src={leftMtnBack}
          className="left-mtn-back intro-mouse im-least anm"
          alt="Mountain"
          data-speed-x="1"
          data-speed-y="1"
        />
        <img
          src={leftMtnMid}
          className="left-mtn-mid intro-mouse im-third anm"
          alt="Mountain"
          data-speed-x="2"
          data-speed-y="1.5"
        />
        <img src={waterfall} className="waterfall" alt="Waterfall" />
        <img
          src={bbRolex}
          className="bb-rolex intro-mouse im-third floating"
          alt="Bower Bird with Rolex"
          data-speed-x="2"
          data-speed-y="1.5"
        />
        <img
          src={carsPole}
          className="cars-pole intro-mouse im-second anm"
          alt="Cars On Pole of Museum"
          data-speed-x="3"
          data-speed-y="2"
        />
        <img
          src={leftBarnMid}
          className="left-barn-mid intro-mouse im-second anm"
          alt="Barn"
          data-speed-x="3"
          data-speed-y="2"
        />
        <img
          src={leftBarnFront}
          className="left-barn-front intro-mouse im-most anm"
          alt="Barn"
          data-speed-x="4"
          data-speed-y="2"
        />
        <img
          src={rightBgFront}
          className="right-bg-front intro-mouse im-most anm"
          alt="Foreground"
          data-speed-x="4"
          data-speed-y="2"
        />
        <img
          src={floatingFrame}
          className="floating-frame floating"
          alt="Floating Frame of Bower Bird Art"
        />
        <img
          src={femaleBB}
          className="female-bb floating"
          alt="Floating Fembale Bower Bird"
        />

        <div className="intro-inner">
          <h1>Bower Birds</h1>
          <h3>Mint Pass Sale - Whitelisted Addresses Only!</h3>
          {signer && tokenAndProof && (
            <>
              <div className="mint-input-wrapper">
                <select
                  className="mint-quantity-selector"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option value="1" defaultValue>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <a
                  className="button btn-alt btn-w-discord mint-btn"
                  target="_blank"
                  onClick={whitelistMint}
                >
                  Mint Now
                </a>
              </div>
              <div className="minting-total-wrap">
                <span className="minting-count">{Number(total)}</span>
                <span className="minting-slash"> / </span>
                <span className="minting-total">1000</span>
              </div>
              <span className="minting-errors"></span>
            </>
          )}
        </div>
        <a className="into-rm" onClick={scrollToAbout}>
          <span>Scroll</span>
          <img src={hand} alt="Retro Hand Pointing Down" />
        </a>
      </section>
    </div>
  );
}

export default Header;
