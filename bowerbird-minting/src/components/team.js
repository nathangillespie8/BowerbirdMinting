import brad from '../images/brad-profile.jpg';
import greg from '../images/greg-profile.jpg';
import nath from '../images/nath-profile.jpg';
import keen from '../images/keen-profile.jpg';
import twitterLogo from '../images/twitter.svg';
import menuClose from '../images/menu-close.svg';

function Team() {

	return (
		<section className="team darkbg-section">
			<div className="container-fluid">
				<h2>The Team</h2>
				<div className="row">
					<div className="col team-inner">
						<div className="team-member">
							<div className="tm-img-wrap">
								<img src={greg} alt="Greg Gillespie" loading="lazy" />
							</div>
							<div className="team-member-inner">
								<h5>Greg Gillespie</h5>
								<h6>Artist<br/>Project Founder</h6>
								<div className="tmi-links-wrap">
									<a href="https://www.twitter.com/GTGart" className="tm-twitter" target="_blank">
										<svg width="17px" height="14px" viewBox="0 0 20 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
										    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										        <g className="tw-fill" fill="#FFFFFF" fillRule="nonzero">
										            <path d="M6.31693104,16.1758418 C13.8083599,16.1758418 17.9059037,9.96908644 17.9059037,4.58686912 C17.9059037,4.41062356 17.9059037,4.23503975 17.8939923,4.06033827 C18.6911781,3.48373515 19.3791754,2.76992961 19.9259999,1.95200904 C19.1826363,2.28133898 18.3940532,2.49751 17.5865,2.59280172 C18.4368462,2.0836969 19.0732273,1.28320236 19.3771902,0.339990835 C18.577578,0.814464173 17.7029677,1.14886751 16.7908583,1.32864239 C15.2483236,-0.311610394 12.6681681,-0.390799575 11.0279153,1.15173509 C9.97000076,2.14656296 9.52133559,3.62887855 9.84956261,5.04347526 C6.57501277,4.87914117 3.5236926,3.33241543 1.45550942,0.787773669 C0.374433717,2.64882972 0.926552157,5.02979913 2.71658058,6.22491608 C2.06828809,6.20572539 1.43433348,6.03080332 0.867877165,5.71514951 C0.867877165,5.7319138 0.867877165,5.74933983 0.867877165,5.76676586 C0.868318331,7.70568759 2.2350486,9.37549846 4.13558894,9.7595329 C3.53604523,9.92298466 2.90672285,9.94702817 2.29637058,9.82945761 C2.82996008,11.4886805 4.3590392,12.625343 6.10164235,12.6579893 C4.65925222,13.7915637 2.87760594,14.4067687 1.04324039,14.4050041 C0.719204441,14.4043423 0.395609654,14.3847105 0.0737795276,14.3461085 C1.93637965,15.541446 4.10382504,16.1754006 6.31693104,16.1725331" id="Path"></path>
										        </g>
										    </g>
										</svg>
										<span>@GTGart</span>
									</a>
									<a className="tm-bio-link" target="_blank">
										<span>Bio</span>
									</a> 
								</div>
								{/*<p>With an art career spanning more than 30 years, Greg is the Award Winning Artist behind the exciting project that is The BowerBird Collective. <a>Read more +</a></p>*/}
								<div className="tm-bio-hidden">
									<img className="tm-bh-close" src={menuClose} alt="Close Button" loading="lazy" />
									<h6>Greg Gillespie</h6>
									<p>Starting his career as an airbrush illustrator working in the advertising industry in the 1980's, he progressed through many disciplines of art, including portrait painting, landscape art, abstract expressionism, along with delving into computer 3D art and application development.</p>
									<p>Greg is passionate about taking his art and changing the world, for the betterment of all mankind.</p>
									<p><strong>Enmore College Of Design - Royal Art Society NSW</strong></p>
									<p><a href="https://gtgart.com" target="_blank">Gtgart.com</a></p>
								</div>
							</div>
						</div>
						<div className="team-member">
							<div className="tm-img-wrap">
								<img src={brad} alt="Brad Keyes" loading="lazy" />
							</div>
							<div className="team-member-inner">
								<h5>Brad Keyes</h5>
								<h6>Community Manager<br/>Co-Founder</h6>
								<div className="tmi-links-wrap">
									<a href="https://www.twitter.com/0xb1ad" className="tm-twitter" target="_blank">
										<svg width="17px" height="14px" viewBox="0 0 20 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
										    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										        <g className="tw-fill" fill="#FFFFFF" fillRule="nonzero">
										            <path d="M6.31693104,16.1758418 C13.8083599,16.1758418 17.9059037,9.96908644 17.9059037,4.58686912 C17.9059037,4.41062356 17.9059037,4.23503975 17.8939923,4.06033827 C18.6911781,3.48373515 19.3791754,2.76992961 19.9259999,1.95200904 C19.1826363,2.28133898 18.3940532,2.49751 17.5865,2.59280172 C18.4368462,2.0836969 19.0732273,1.28320236 19.3771902,0.339990835 C18.577578,0.814464173 17.7029677,1.14886751 16.7908583,1.32864239 C15.2483236,-0.311610394 12.6681681,-0.390799575 11.0279153,1.15173509 C9.97000076,2.14656296 9.52133559,3.62887855 9.84956261,5.04347526 C6.57501277,4.87914117 3.5236926,3.33241543 1.45550942,0.787773669 C0.374433717,2.64882972 0.926552157,5.02979913 2.71658058,6.22491608 C2.06828809,6.20572539 1.43433348,6.03080332 0.867877165,5.71514951 C0.867877165,5.7319138 0.867877165,5.74933983 0.867877165,5.76676586 C0.868318331,7.70568759 2.2350486,9.37549846 4.13558894,9.7595329 C3.53604523,9.92298466 2.90672285,9.94702817 2.29637058,9.82945761 C2.82996008,11.4886805 4.3590392,12.625343 6.10164235,12.6579893 C4.65925222,13.7915637 2.87760594,14.4067687 1.04324039,14.4050041 C0.719204441,14.4043423 0.395609654,14.3847105 0.0737795276,14.3461085 C1.93637965,15.541446 4.10382504,16.1754006 6.31693104,16.1725331" id="Path"></path>
										        </g>
										    </g>
										</svg>
										<span>@0xb1adΞ</span>
									</a>
									<a className="tm-bio-link" target="_blank">
										<span>Bio</span>
									</a>
								</div>
								{/*<p>Brad has been in the Crypto, DeFi and NFT space for the last 2 years. Co-founder of AssureDefi. <a>Read more +</a></p>*/}
								<div className="tm-bio-hidden">
									<img className="tm-bh-close" src={menuClose} alt="Close Button" loading="lazy" />
									<h6>Brad Keyes</h6>
									<p>Worked in the DeFi space as a community manager with experience in communities for the past 2 years.</p>
									<p>Passionate about blockchain technology and the future of the NFT space.</p>
								</div>
							</div>
						</div>
						<div className="team-member">
							<div className="tm-img-wrap">
								<img src={keen} alt="Keenan Gillespie" loading="lazy" />
							</div>
							<div className="team-member-inner">
								<h5>Keenan Gillespie</h5>
								<h6>Marketing Manager<br/>Co-Founder</h6>
								<div className="tmi-links-wrap">
									<a className="tm-bio-link" target="_blank">
										<span>Bio</span>
									</a>
								</div>
								{/*<p>Our resident social media guru. Keenan has been creating, managing, and optimising brands for the last 8 years. <a>Read more +</a></p>*/}
								<div className="tm-bio-hidden">
									<img className="tm-bh-close" src={menuClose} alt="Close Button" loading="lazy" />
									<h6>Keenan Gillespie</h6>
									<p>Working in the social media space Keenan has been an active entrepreneur of his own brands and the brands of several Fortune 500 companies including Red Bull since 2015.</p>
									<p>Passionate about brand identity and optimum outcomes.</p>
								</div>
							</div>
						</div>
						<div className="team-member">
							<div className="tm-img-wrap">
								<img src={nath} alt="Marsvolta" loading="lazy" />
							</div>
							<div className="team-member-inner">
								<h5>Nathan Gillespie</h5>
								<h6>Web Dev<br/>Co-Founder</h6>
								<div className="tmi-links-wrap">
									<a href="https://www.twitter.com/Nath_g_yo" className="tm-twitter" target="_blank">
										<svg width="17px" height="14px" viewBox="0 0 20 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
										    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										        <g className="tw-fill" fill="#FFFFFF" fillRule="nonzero">
										            <path d="M6.31693104,16.1758418 C13.8083599,16.1758418 17.9059037,9.96908644 17.9059037,4.58686912 C17.9059037,4.41062356 17.9059037,4.23503975 17.8939923,4.06033827 C18.6911781,3.48373515 19.3791754,2.76992961 19.9259999,1.95200904 C19.1826363,2.28133898 18.3940532,2.49751 17.5865,2.59280172 C18.4368462,2.0836969 19.0732273,1.28320236 19.3771902,0.339990835 C18.577578,0.814464173 17.7029677,1.14886751 16.7908583,1.32864239 C15.2483236,-0.311610394 12.6681681,-0.390799575 11.0279153,1.15173509 C9.97000076,2.14656296 9.52133559,3.62887855 9.84956261,5.04347526 C6.57501277,4.87914117 3.5236926,3.33241543 1.45550942,0.787773669 C0.374433717,2.64882972 0.926552157,5.02979913 2.71658058,6.22491608 C2.06828809,6.20572539 1.43433348,6.03080332 0.867877165,5.71514951 C0.867877165,5.7319138 0.867877165,5.74933983 0.867877165,5.76676586 C0.868318331,7.70568759 2.2350486,9.37549846 4.13558894,9.7595329 C3.53604523,9.92298466 2.90672285,9.94702817 2.29637058,9.82945761 C2.82996008,11.4886805 4.3590392,12.625343 6.10164235,12.6579893 C4.65925222,13.7915637 2.87760594,14.4067687 1.04324039,14.4050041 C0.719204441,14.4043423 0.395609654,14.3847105 0.0737795276,14.3461085 C1.93637965,15.541446 4.10382504,16.1754006 6.31693104,16.1725331" id="Path"></path>
										        </g>
										    </g>
										</svg>
										<span>@Nath_g_yo</span>
									</a>
									<a className="tm-bio-link" target="_blank">
										<span>Bio</span>
									</a>
								</div>
								{/*<p>Our resident web wizard. Nathan has been programming and developing since ‘07. With over 10+ years experience as a professional web dev for a global e-commerce brand. <a>Read more +</a></p>*/}
								<div className="tm-bio-hidden">
									<img className="tm-bh-close" src={menuClose} alt="Close Button" loading="lazy" />
									<h6>Nathan Gillespie</h6>
									<p>Working in with major Australian homegrown startups, Nathan has refined his skillset with the passionate pursuit of craft for over ten years at the helm of major ecommerce projects.</p>
									<p>Dedicated to high achievement through careful attention to the details.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;