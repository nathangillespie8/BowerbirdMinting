import unique from '../images/unique-icon.png';
import community from '../images/community-icon.png';
import collective from '../images/collective-icon.png';
import utilities from '../images/utilities-icon.png';


function Specs() {
	return (
		<section className="specs plainbg-section">
			<div className="container-fluid">
				<h2>Why We Are Different</h2>
				<div className="row">
					<div className="col specs-inner">
						<div className="spec">
							<h5>Unique Fine Art Avatar Collection</h5>
							<p>The BOWERBIRDS are hand painted and programatically generated from over 256 individual traits by veteran artist GT Gart.</p>
						</div>
						<div className="spec">
							<h5>Fully Documented Team</h5>
							<p>Unlike so many other NFT projects who hide behind anonymity, the BOWERBIRD team are all family members and fully documented, so you know we have our reputations on the line.</p>
						</div>
						<div className="spec">
							<h5>Utility</h5>
							<p>The BOWERBIRD Collective is setting new standards for projects with real world use cases and utility that other projects can only dream about.</p>
						</div>
						{/*<div className="spec">
							<img src={utilities} alt="Utilities Bird Icon" />
							<h5>Utilities</h5>
							<p>With the roadmap utility others can only dream about, the Bower Bird Collective is setting new standards for projects with real world use cases.</p>
						</div>
						<div className="spec">
							<h5>Burncentives</h5>
							<p>You will be able to trade your Moon Boyz for unique NFT's (spaceships, weapons...) to access our new metaverse bases and take part in challenges.</p>
						</div>
						<div className="spec">
							<h5>Committed</h5>
							<p>Our team is committed to remaining at the cutting edge of innovation while being transparent and active.</p>
						</div>*/}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Specs;