import discordLogo from '../images/discord.svg';
import bbImg from '../images/bower-bird-example2.jpg';
import spBirdCentre from '../images/centre-bb.png';
import spBirdLeft1 from '../images/left-bb-1.png';
import spBirdLeft2 from '../images/left-bb-2.png';
import spBirdLeft3 from '../images/left-bb-3.png';
import spBirdRight1 from '../images/right-bb-1.png';
import spBirdRight2 from '../images/right-bb-2.png';
import spBirdRight3 from '../images/right-bb-3.png';

function Value() {
	return (
		<section className="value project plainbg-section">
			<div className="container-fluid">
				<h2>The Project</h2>
				<div className="v-spbirds-wrap">
					<img src={spBirdCentre} className="spreadBird spb-centre" loading="lazy" />
					<img src={spBirdLeft1} className="spreadBird spb-left1" loading="lazy" />
					<img src={spBirdLeft2} className="spreadBird spb-left2" loading="lazy" />
					<img src={spBirdLeft3} className="spreadBird spb-left3" loading="lazy" />
					<img src={spBirdRight1} className="spreadBird spb-right1" loading="lazy" />
					<img src={spBirdRight2} className="spreadBird spb-right2" loading="lazy" />
					<img src={spBirdRight3} className="spreadBird spb-right3" loading="lazy" />
				</div>
				<div className="row row-cols-1 col-md-8 offset-md-2">
					<div className="col">
						<p>The BOWERBIRD Collective is a unique community-based project that addresses the narrative between artist and collector.</p>
						<p>With roadmap utility others can only dream about, the BOWERBIRD Collective is setting new standards for projects with real world use cases. See the roadmap for more details.</p>
						<p>We are artists, collectors and collaborators storming the metaverse.</p>
								
						<a className="button btn-big btn-alt btn-w-discord" href="https://discord.gg/bowerbirds" target="_blank">Join Our Discord <img src={discordLogo} alt="Discord Icon" loading="lazy" /></a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Value;