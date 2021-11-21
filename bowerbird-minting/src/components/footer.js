import logo from '../images/bb-logo.png';
import twitterLogo from '../images/twitter.svg';
import discordLogo from '../images/discord.svg';

function Footer() {
	return (
		<footer className="row">
			<a href="https://bowerbirdcollective.io" className="logo-link col-sm-3">
				<img src={logo} alt="Bower Bird Collective Logo" loading="lazy" />
			</a>
			<small className="footer-text col-sm-6">&copy; The Bower Bird Collective - All Rights Reserved - Art Design by GT Gart</small>
			<div className="social-links col-sm-3">
				<a href="https://twitter.com/BowerBirdsNFT" target="_blank">
					<img src={twitterLogo} alt="Twitter Bird Icon" loading="lazy" />
				</a>
				<a href="https://discord.gg/bowerbirds" target="_blank">
					<img src={discordLogo} alt="Discord Icon" loading="lazy" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;