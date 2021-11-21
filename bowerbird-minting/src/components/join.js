import discordLogo from '../images/discord.svg';

function Join() {
	return (
		<section className="join text-center">
			<div className="container-fluid">
				<div className="col px-4">
					<h3>So That Leaves Just One Thing Left To Do</h3>
					<a href="https://discord.gg/bowerbirds" className="button btn-big btn-alt btn-w-discord" target="_blank">Join Our Discord Now <img src={discordLogo} alt="Discord Logo" loading="lazy" /></a>
				</div>
			</div>
			<div className="inception inception-bottom"></div>
		</section>
	);
}

export default Join;