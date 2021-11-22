import React from 'react';
import { ethers } from "ethers";
/*import abiJson from 'contract-abi';*/
import abiJson from '../contract-abi.json';
import whitelistedAddress from '../address-data.json';
import logo from '../images/bb-logo.png';
import twitterLogo from '../images/twitter.svg';
import menuIcon from '../images/menu-icon.svg';
import menuClose from '../images/menu-close.svg';
import skyPeddler from '../images/sky-peddler.gif';
import usdCar from '../images/upsidedown-car.png';
import catCar from '../images/car-cat.png';
import leftMtnBack from '../images/left-mtn-back.png';
import leftMtnMid from '../images/left-mtn-mid.png';
import waterfall from '../images/waterfall.png';
import bbRolex from '../images/bb-rolex.png';
import carsPole from '../images/right-museum-cars-pole.png';
import leftBarnMid from '../images/left-barn-mid.png';
import leftBarnFront from '../images/left-barn-front.png';
import rightBgFront from '../images/right-bg-front.png';
import floatingFrame from '../images/golden-floating-frame.png';
import femaleBB from '../images/bb-female.png';
import discordLogo from '../images/discord.svg';
import hand from '../images/retro-hand.svg';


const utils = ethers.utils;

export let contract = React.createContext();
let signer = React.createContext();
let provider = React.createContext();
let tokenAndProof = React.createContext();


function scrollToAbout() {
	document.querySelector('#aboutSection').scrollIntoView();
}

function checkWalletWhitelisted(address) {
	let walletFound = false;
	const addressJson = whitelistedAddress;
	for(var i = 0; i < addressJson.length; i++)
	{
	    var userDetails = addressJson[i];
	    walletFound = userDetails["Address"].toLowerCase() == address.toLowerCase() ? true : false;
	    if(walletFound) {
	    	break;
	    }
	}
	return walletFound;
}

function getTokenIdAndProofFromWallet(address) {
	const addressJson = whitelistedAddress;
	let tokenAndProof = {};
	for(var i = 0; i < addressJson.length; i++)
	{
	    var userDetails = addressJson[i];
	    if(userDetails["Address"].toLowerCase() == address.toLowerCase()) {
    		let tokenAndProof = {
				token: userDetails["Token"],
				proof: userDetails["Proof"]
    		}
    		return tokenAndProof;
	    }
	}
}

async function BuyNfts() {
	console.log('buy nfts called');

	const quantity = document.querySelector('.mint-quantity-selector').value;

	// const value = React.useContext(signer);

	console.log(quantity);
	// console.log({value});
	console.log(contract);
	console.log(tokenAndProof);
	console.log(provider);
  // let txHash = null;

  // try {
  //   const gasLimit = quantity * 100000;
  //   const itemPriceWei = Number(80000000000000000);

  //   const overrides = {
  //     value: String(Number(quantity) * Number(itemPriceWei)),
  //     gasLimit: gasLimit
  //   }

  //   const tx = await contract.whitelistBuy(quantity, tokenAndProof.token, tokenAndProof.proof, overrides);
  //   console.log(tx);
  //   if (tx.hash) {
  //   	console.log('Transacton successful!');
  //     //this.$toast.info('Transaction submitted successfully');
  //   }
  //   txHash = tx.hash;
  // } catch (err) {
  //   if (err.message.includes('denied')) {
  //   	console.log('Transaction unsuccessful');
  //     //this.$toast.info('Transaction unsuccessful');
  //   } else {
  //     //this.$toast.error(err.message);
  //   }
  // }
}

async function continuallyGetAmountSold(contract) {
	const mintCount = document.querySelector('.minting-count');
	setInterval(async function(){
		const tokensMinted = await contract.tokensMinted();

	    mintCount.innerHTML = parseInt(tokensMinted, 16);
	}, 15000);
}

async function getUserEthWallet() {
  let provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );


  await provider.send("eth_requestAccounts", []);
  let signer = provider.getSigner();

  (async function () {
    let userAddress = await signer.getAddress();
    //document.getElementById("wallet").innerText = "Your wallet is " + userAddress;
    const connectWalletBtn = document.querySelector('.connect-wallet-button');
    const mintingTotal = document.querySelector('.minting-total-wrap');
    connectWalletBtn.innerHTML = userAddress.toLowerCase();
    connectWalletBtn.classList.add("wallet-string");

    let wallet = userAddress.toLowerCase();

    const walletIsWhitelisted = checkWalletWhitelisted(wallet);
    // const walletIsWhitelisted = checkWalletWhitelisted('0x20769c77CDbCF9d7C92B903c06764F8F823F3082');
		walletIsWhitelisted == true ? console.log('wallet is whitelisted!') : console.log('wallet not whitelisted');

		if (walletIsWhitelisted) {
			const mintBtn = document.querySelector('.mint-btn');
			const mintQtySelect = document.querySelector('.mint-quantity-selector');

			mintBtn.removeAttribute('disabled');
			mintQtySelect.disabled = false;

			let tokenAndProof = getTokenIdAndProofFromWallet(wallet);
	    	let balance = await provider.getBalance(wallet);
			// we use the code below to convert the balance from wei to eth
			balance = ethers.utils.formatEther(balance);

		  	const contractAddress = "0x460d357d6F57A464D3dd50B8d4EEABAFec3BD52b";

			let contract = new ethers.Contract(
			    contractAddress,
			    abiJson,
			    signer
			);

			continuallyGetAmountSold(contract);
			mintingTotal.style.display = "block";

			BuyNfts();

			// buyNfts(1, contract, tokenAndProof);

			//console.log(contract);

			const gasLimit = 1 * 100000;
		    const itemPriceWei = Number(80000000000000000);

		    const overrides = {
		      value: String(Number(1) * Number(itemPriceWei)),
		      gasLimit: gasLimit
		    }

		    const proofWithQuotes = tokenAndProof.proof.replaceAll(',','","');
			const proofAsArray = tokenAndProof.proof.split(',');
	    	const tx = await contract.whitelistBuy(1, tokenAndProof.token, proofAsArray, overrides);

		  	console.log(tx);
	    // console.log(contract);

		  /*window.ethereum.enable();*/

	    /*const provider = 'web3';*/
	    {/*await provider.send("eth_requestAccounts", []);
	    const ethers = new ethers.providers.Web3Provider(window.ethereum, 'any');

	    ethers.on('network', (newNetwork, oldNetwork) => {
	      if (oldNetwork) {
	        window.location.reload();
	      }
	    });

	    console.log('yep fine so far');
	    console.log(ethers);*/}

	    {/*
	    this.signer = this.ethers.getSigner();
	    this.account = await this.signer.getAddress();
	    this.balance = await this.signer.getBalance();
	    this.ethBalance = await ethers.utils.formatEther(this.balance);
	    this.signer = this.ethers.getSigner();
	    const addr = await this.signer.getAddress();
	    this.walletBtnText =
	      addr.substr(0, 10) + '...' + addr.substr(addr.length - 5, addr.length);

	    window.ethereum.on('accountsChanged', (accounts) => {
	      if (accounts.length < 1) return

	      this.walletBtnText =
	        accounts[0].substr(0, 10) +
	        '...' +
	        accounts[0].substr(accounts[0].length - 5, accounts[0].length)
	    });

	    document.querySelector('.connect-wallet-button').innerHTML = this.walletBtnText;

	    const { chainId } = await this.ethers.getNetwork()
	    if (chainId !== 1) {
	      this.showNonMainnetWarning = true;
	    }*/}

    } else {
    	alert('Wallet not whitelisted');
    }
  })();

}

function openMenu() {
	document.getElementById("mmc").classList.add("active");
}

function closeMenu() {
 	document.getElementById("mmc").classList.remove("active");
}
	

function Header() {
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
						<a className="icon-link" href="https://twitter.com/BowerBirdsNFT" target="_blank">
							<img src={twitterLogo} alt="Twitter Bird Icon" />
						</a>
						<a className="button btn-w-discord connect-wallet-button" onClick={getUserEthWallet}>
							Connect Wallet
						</a>
					</div>
					<div id="wallet"></div>
				</div>
			</header>
			<section className="intro-wrap" >
				<div className="inception inception-top"></div>
				<div className="inception inception-bottom"></div>
				<img src={skyPeddler} className="sky-peddler intro-animated" alt="Sky Peddler on Bike" />
				<img src={usdCar} className="usd-car intro-animated" alt="Upside Down Car" />
				<img src={catCar} className="cat-car intro-animated" alt="Cat Driving Car" />
				<img src={leftMtnBack} className="left-mtn-back intro-mouse im-least anm" alt="Mountain" data-speed-x="1" data-speed-y="1" />
				<img src={leftMtnMid} className="left-mtn-mid intro-mouse im-third anm" alt="Mountain" data-speed-x="2" data-speed-y="1.5" />
				<img src={waterfall} className="waterfall" alt="Waterfall" />
				<img src={bbRolex} className="bb-rolex intro-mouse im-third floating" alt="Bower Bird with Rolex" data-speed-x="2" data-speed-y="1.5" />
				<img src={carsPole} className="cars-pole intro-mouse im-second anm" alt="Cars On Pole of Museum" data-speed-x="3" data-speed-y="2" />
				<img src={leftBarnMid} className="left-barn-mid intro-mouse im-second anm" alt="Barn" data-speed-x="3" data-speed-y="2" />
				<img src={leftBarnFront} className="left-barn-front intro-mouse im-most anm" alt="Barn" data-speed-x="4" data-speed-y="2" />
				<img src={rightBgFront} className="right-bg-front intro-mouse im-most anm" alt="Foreground" data-speed-x="4" data-speed-y="2" />
				<img src={floatingFrame} className="floating-frame floating" alt="Floating Frame of Bower Bird Art" />
				<img src={femaleBB} className="female-bb floating" alt="Floating Fembale Bower Bird" />

				<div className="intro-inner">
					<h1>Bower Birds</h1>
					<h3>Mint Pass Sale - Whitelisted Addresses Only!</h3>
					<div className="mint-input-wrapper">
						<select className="mint-quantity-selector" disabled>
							<option value="1" defaultValue>1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<a className="button btn-alt btn-w-discord mint-btn" target="_blank" disabled>
							Mint Now
						</a>
					</div>
					<div className="minting-total-wrap">
						<span className="minting-count"></span>
						<span className="minting-slash"> / </span>
						<span className="minting-total">1000</span>
					</div>
					<span className="minting-errors"></span>
				</div>
				<a className="into-rm" onClick={scrollToAbout}>
					<span>Scroll</span>
					<img src={hand} alt="Retro Hand Pointing Down" />
				</a>
			</section>
		</div>
	)
}

export default Header;