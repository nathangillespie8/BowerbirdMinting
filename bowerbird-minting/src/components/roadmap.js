import roadmap from '../images/roadmap.jpg';
import discordLogo from '../images/discord.svg';

function Roadmap() {
	return (
		<section className="roadmap darkbg-section">
			<h2>The Roadmap</h2>
			<div className="container-fluid">
				<div className="row">
					<div className="col text-center">
						<img className="rm-main-img" src={roadmap} alt="Bower Bird Collective Roadmap" loading="lazy" />
						<a className="button btn-big btn-w-discord" href="https://discord.gg/bowerbirds" target="_blank">Join Our Discord <img src={discordLogo} alt="Discord Icon" loading="lazy" /></a>
					</div>
					{/*<div className="col roadmap-inner">
						<div className="rmi-subtitle">
							<span className="rmi-number">1</span>
							<h4>Phase One (active)</h4>
						</div>
						<div className="rmi-content">
							<ol>
								<li><strong>Moon Boyz Minting Process:</strong><br/>
								All 11.111 Moon Boyz are minted and ready for take-off.</li>
								<li><strong>Moon Boyz Party:</strong><br/>
								As we just landed successfully on the Moon, we need to celebrate. We willorganize a private event and invite the 300 most rare Moon Boyz to celebrate with the team and influencers.</li>
								<li><strong>Space Mission:</strong><br/>
								We will launch Moon Boyz In the stratosphere with Meteo Balloons and launchers, stream it and use the event as a giveaway and a competition for our community.</li>
								<li><strong>Exclusive Merch For Holders:</strong><br/>
								Exclusive Merch will be created with the community and will only be accessible to holders. We will also use the merchandise as a reward for the most engaged community member.</li>
								<li><strong>Private Club Access:</strong><br/>
								Holding a Moon Boy will grant you access to the Moon Boyz private business club, where you will be able to discuss the latest NFT and crypto projects.</li>
								<li><strong>OG group creation:</strong><br/>
								We will create a group that rewards the most active members and the biggest holders, allowing members from the community to work directly with the team on the different projects, vote, give new ideas, and more.</li>
							</ol>
						</div>
						<div className="rmi-subtitle">
							<span className="rmi-number">2</span>
							<h4>Phase Two</h4>
						</div>
						<div className="rmi-subtitle">
							<span className="rmi-number">3</span>
							<h4>Phase Three</h4>
						</div>
					</div>*/}
					{/*<div id="infographic" className="d-flex flex-column align-items-center py-5">
					   <div className="step one text-primary">
					      <div className="circle">
					         <img src={spBirdLeft2} alt="Orange Bower Bird" loading="lazy" />
					         <h4>Launch Season (active)</h4>
					      </div>
					      <article data-step="1">
					         <div className="rm-point-title d-flex align-items-center text-primary">
					            <i className="fas fa-feather-alt"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>

					            <div className="d-flex justify-content-between mt-3 controls">
					               <a> </a>
					               <a className="btn btn-outline-primary" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="2">
					         <div className="rm-point-title d-flex align-items-center text-primary">
					            <i className="fas fa-meteor"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-primary" href="#">Prev</a>
					               <a className="btn btn-outline-primary" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="3">
					         <div className="rm-point-title d-flex align-items-center text-primary">
					            <i className="fas fa-meteor"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-primary" href="#">Prev</a>
					               <a className="btn btn-outline-primary" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="4">
					         <div className="rm-point-title d-flex align-items-center text-primary">
					            <i className="fas fa-meteor"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-primary" href="#">Prev</a>
					               <a className="btn btn-outline-primary" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="5">
					         <div className="rm-point-title d-flex align-items-center text-primary">
					            <i className="fas fa-meteor"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-primary" href="#">Prev</a>
					               <a className="btn btn-outline-primary" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					   </div>
					   <div className="step two text-success">
					      <div className="circle">
					         <i className="fas fa-cookie-bite"></i>
					         <h4>Mating Season<br /><small>3-4 Weeks Afer Launch</small></h4>
					      </div>
					      <article data-step="6">
					         <div className="rm-point-title d-flex align-items-center text-success">
					            <i className="fas fa-cookie-bite"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>

					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-success" href="#">Prev</a>
					               <a className="btn btn-outline-success" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="7">
					         <div className="rm-point-title d-flex align-items-center text-success">
					            <i className="fas fa-cookie-bite"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-success" href="#">Prev</a>
					               <a className="btn btn-outline-success" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="8">
					         <div className="rm-point-title d-flex align-items-center text-success">
					            <i className="fas fa-cookie-bite"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-success" href="#">Prev</a>
					               <a className="btn btn-outline-success" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="9">
					         <div className="rm-point-title d-flex align-items-center text-success">
					            <i className="fas fa-cookie-bite"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-success" href="#">Prev</a>
					               <a className="btn btn-outline-success" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="10">
					         <div className="rm-point-title d-flex align-items-center text-success">
					            <i className="fas fa-cookie-bite"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-success" href="#">Prev</a>
					               <a className="btn btn-outline-success" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					   </div>
					   <div className="step three text-danger">
					      <div className="circle">
					         <i className="fas fa-dragon"></i>
					         <h4>End Game</h4>
					      </div>
					      <article data-step="11">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-dragon"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>

					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					               <a className="btn btn-outline-danger" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="12">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-dragon"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					               <a className="btn btn-outline-danger" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="13">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-dragon"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					               <a className="btn btn-outline-danger" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="14">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-dragon"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					               <a className="btn btn-outline-danger" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="15">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-dragon"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					               <a className="btn btn-outline-danger" href="#">Next</a>
					            </div>
					         </div>
					      </article>
					      <article data-step="16">
					         <div className="rm-point-title d-flex align-items-center text-danger">
					            <i className="fas fa-flag-checkered"></i>
					            <h6>Lorem Ipsum dolor sit Amet</h6>
					         </div>

					         <h6></h6>
					         <div className="body">
					            <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
					            <div className="d-flex justify-content-between mt-3 controls">
					               <a className="btn btn-outline-danger" href="#">Prev</a>
					            </div>
					         </div>
					      </article>
					   </div>
					</div>*/}
				</div>
			</div>
		</section>
	);
}

export default Roadmap;