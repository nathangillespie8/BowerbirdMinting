import { ethers } from "ethers";
/*import abiJson from 'contract-abi';*/
import whitelistedAddress from '../address-data.json';
import logo from '../images/bb-logo.png';
import twitterLogo from '../images/twitter.svg';
import menuIcon from '../images/menu-icon.svg';
import menuClose from '../images/menu-close.svg';

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
		console.log(addressJson);
		{/*for (var key of Object.keys(addressJson)) {
		    // console.log(key + " -> " + JSON.stringify(addressJson[key]));
		    for (var jey of Object.keys(addressJson[key])) {
		    	console.log(jey + " -> " + JSON.stringify(addressJson[jey]));
		    }
		}*/}
		//console.log(typeof addressJson);
		for(var i = 0; i < addressJson.length; i++)
		{
		    var product = addressJson[i];
		    walletFound = product["Address"] == address ? true : false;
		    if(walletFound) {
		    	break;
		    }
		    console.log(product["Address"]);
		    console.log(address);
		    //console.log(walletFound);
		    for(var j = 0; j < product.length; j++)
		    {
		    	console.log(j);
		        var version = product[j];
		        console.log(version);
		    }
		}
		return walletFound;
		//console.log(addressJson);
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
    document.getElementById("wallet").innerText =
      "Your wallet is " + userAddress;

    let wallet = userAddress;

    const walletIsWhitelisted = checkWalletWhitelisted(wallet);
    // const walletIsWhitelisted = checkWalletWhitelisted('0x20769c77CDbCF9d7C92B903c06764F8F823F3082');
		walletIsWhitelisted == true ? console.log('wallet is whitelisted!') : console.log('wallet not whitelisted');

    let balance = await provider.getBalance(wallet);
	  // we use the code below to convert the balance from wei to eth
	  balance = ethers.utils.formatEther(balance);
	  console.log(balance);

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