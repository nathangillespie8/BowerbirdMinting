import discordLogo from '../images/discord.svg';
import Glide from '@glidejs/glide';

function mountSlider() {
	new Glide('.glide').mount();
}

function ToFish() {
	return (
		<section className="tofish plainbg-section text-center px-4">
			<div className="container-fluid">
				<div className="row gx-3">
					<div className="container-fluid">
						<h2>Giving Back</h2>
						<div className="col col-sm-8 offset-sm-2">
							    <p>The BOWERBIRD Collective is all about fair distribution, not only in the way we are going to make our NFT artwork available, but fair distribution when it comes to sharing wealth.</p>
							    	<p>Our founder GT Gart has been planning a new foundation in the micro finance space for the past two years. The BOWERBIRD Collective will be contributing a % of our total profits towards helping the poorest of the poor, with assistance to joining the business world as entrepreneurs through the liberating process called Micro Finance.</p>
							    	<p>More information can be found at <a href="https://tofish.org/" target="_blank">ToFish.org</a></p>		
							{/*<a className="button btn-big btn-alt btn-w-discord" href="https://discord.gg/bowerbirds" target="_blank">Join Our Discord <img src={discordLogo} alt="Discord Icon" /></a>*/}
						</div>
					</div>
				</div>
			</div>
		</section>
	);

	mountSlider();

}

export default ToFish;