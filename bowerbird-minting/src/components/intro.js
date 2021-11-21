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

function Intro() {

	function scrollToAbout() {
		document.querySelector('#aboutSection').scrollIntoView();
	}

	return (
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
				<a href="https://discord.gg/bowerbirds" className="button btn-alt btn-w-discord" target="_blank" disabled>
					Mint Now<img src={discordLogo} alt="Discord Icon" />
				</a>
			</div>
			<a className="into-rm" onClick={scrollToAbout}>
				<span>Scroll</span>
				<img src={hand} alt="Retro Hand Pointing Down" />
			</a>
		</section> 
	);
}





export default Intro;