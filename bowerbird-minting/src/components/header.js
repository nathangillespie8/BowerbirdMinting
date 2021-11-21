import { ethers } from "ethers";
/*import abiJson from 'contract-abi';*/
import abiJson from '../contract-abi.json';
import whitelistedAddress from '../address-data.json';
import logo from '../images/bb-logo.png';
import twitterLogo from '../images/twitter.svg';
import menuIcon from '../images/menu-icon.svg';
import menuClose from '../images/menu-close.svg';

const utils = ethers.utils;

{/*function checkHeaderStuck() {
	console.log('header js loaded');
	const el = document.querySelector("header")
	const observer = new IntersectionObserver( 
		([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
		{ threshold: [1] }
	);

	observer.observe(el);
}

checkHeaderStuck();*/}

// function getUserEthWallet() {
// 	async () => {
// 		try {
// 			const provider = new ethers.providers.Web3Provider(
// 				window.ethereum,
// 				"any"
// 			);
// 			await provider.send("eth_requestAccounts", []);
// 			const signer = provider.getSigner();

// 			(async function () {
// 				let userAddress = await signer.getAddress();
// 				console.log("Your wallet is " + userAddress);
// 			})();
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// }

// getUserEthWallet();

function checkWalletWhitelisted(address) {
		let walletFound = false;
		const addressJson = whitelistedAddress;
		for(var i = 0; i < addressJson.length; i++)
		{
		    var userDetails = addressJson[i];
		    walletFound = userDetails["Address"] == address ? true : false;
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
		    if(userDetails["Address"] == address) {
		    		let tokenAndProof = {
		    				token: userDetails["Token"],
		    				proof: userDetails["Proof"]
		    		}
		    		return tokenAndProof;
		    }
		}
}

async function buyNfts(quantity, contract, tokenAndProof) {
	console.log('buy nfts called')
  let txHash = null;

  try {
    const gasLimit = quantity * 100000;
    const itemPriceWei = Number(80000000000000000);

    const overrides = {
      value: String(Number(quantity) * Number(itemPriceWei)),
      gasLimit: gasLimit
    }

    const tx = await contract.whitelistBuy(quantity, tokenAndProof.token, tokenAndProof.proof, overrides);
    console.log(tx);
    if (tx.hash) {
    	console.log('Transacton successful!');
      //this.$toast.info('Transaction submitted successfully');
    }
    txHash = tx.hash;
  } catch (err) {
    if (err.message.includes('denied')) {
    	console.log('Transaction unsuccessful');
      //this.$toast.info('Transaction unsuccessful');
    } else {
      //this.$toast.error(err.message);
    }
  }
}

async function continuallyGetAmountSold(contract) {
	const mintCount = document.querySelector('.minting-count');
	setInterval(async function(){
		const tokensMinted = await contract.tokensMinted();

	    mintCount.innerHTML = parseInt(tokensMinted, 16);
	}, 15000);
}

async function getUserEthWallet() {
  const provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );


  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  (async function () {
    let userAddress = await signer.getAddress();
    //document.getElementById("wallet").innerText = "Your wallet is " + userAddress;
    const connectWalletBtn = document.querySelector('.connect-wallet-button');
    connectWalletBtn.innerHTML = userAddress;
    connectWalletBtn.classList.add("wallet-string");

    let wallet = userAddress;

    const walletIsWhitelisted = checkWalletWhitelisted(wallet);
    // const walletIsWhitelisted = checkWalletWhitelisted('0x20769c77CDbCF9d7C92B903c06764F8F823F3082');
		walletIsWhitelisted == true ? console.log('wallet is whitelisted!') : console.log('wallet not whitelisted');

		if (walletIsWhitelisted) {
			const mintBtn = document.querySelector('.mint-btn');
			const mintQtySelect = document.querySelector('.mint-quantity-selector');

			mintBtn.removeAttribute('disabled');
			mintQtySelect.disabled = false;

			const tokenAndProof = getTokenIdAndProofFromWallet(wallet);
	    	let balance = await provider.getBalance(wallet);
			// we use the code below to convert the balance from wei to eth
			balance = ethers.utils.formatEther(balance);

		  	const contractAddress = "0xd7a0744ec45fa49684Ad99d99BF1Bf992F08A526";

			const contract = new ethers.Contract(
			    contractAddress,
			    abiJson,
			    signer
			);

			continuallyGetAmountSold(contract);

			// buyNfts(1, contract, tokenAndProof);

			//console.log(contract);

			const gasLimit = 1 * 100000;
		    const itemPriceWei = Number(80000000000000000);

		    const overrides = {
		      value: String(Number(1) * Number(itemPriceWei)),
		      gasLimit: gasLimit
		    }


			const proofInBytes = utils.formatBytes32String(tokenAndProof.proof);
			// const proofInBytes = ethers.utils.parseBytes32String(tokenAndProof.proof);
		    console.log(typeof tokenAndProof.proof);
		    const tx = await contract.whitelistBuy(1, tokenAndProof.token, proofInBytes);

		    // console.log(tx);
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
	);
}

export default Header;