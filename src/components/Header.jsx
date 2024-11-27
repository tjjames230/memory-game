const Header = ({ score, highScore }) => {
	return (
		<header className="d-flex flex-row justify-content-between p-4">
			<h1 className="m-0">Memory Game</h1>
			<div id="scoreboard" className="d-flex flex-row align-items-center gap-4">
				<p className="m-0">Current Score: {score}</p>
				<p className="m-0">High Score: {highScore}</p>
			</div>
		</header>
	);
};

export default Header;
