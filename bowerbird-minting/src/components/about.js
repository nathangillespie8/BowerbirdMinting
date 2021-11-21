import bbCentre from '../images/centre-bb.png';

function About() {
	return (
		<section className="about plainbg-section" id="aboutSection">
			<div className="container-fluid">
				<h2>About The Bowerbird Collective</h2>
				<h3>Explore the Mysterious Art Lands with GT Gart</h3>
				<div className="row row-cols-1 row-cols-sm-2">
					<div className="col abt-left-col">
						<div className="swiper about-swiper">
							<div className="swiper-wrapper">
							    <div className="swiper-slide">
									<p>The BOWERBIRDS are an NFT art collection of 10,101 unique collectible hand painted works of art, brought to life by award winning artist <a href="https://gtgart.com" target="_blank">GT Gart</a>. They exist in the BowerBird Collective, a gathering of NFT art collectors and NFT artists, brought together in a unique online community.</p>
									<p>As a BOWERBIRD NFT holder you will become a member of a private community and be able to unlock a series of exciting rewards through community roadmap activation.</p>
								</div>
								<div className="swiper-slide">
									<p>The BOWERBIRD paintings are generated from over 256 hand drawn traits, representing the personal journey of the artist over his career. Each piece has special significance relating to the art landscapes through which he has traversed since the early 1980's. These paintings are full of hints and features referencing great artists of the past, present and bizarrely even the future.</p>
								</div>
							</div>
							<div className="swiper-pagination"></div>
						</div>
					</div>
					<div className="col text-center">
						<img src={bbCentre} alt="Bower Bird Example" loading="lazy" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;