import randomizer from "../utils/randomizer";

const Card = ({ cards }) => {
	const sortedList = cards.sort((a, b) => a.location - b.location);

	const cardList = sortedList.map((card) => {
		return (
			<div
				key={card.id}
				className="card bg-secondary"
				style={{ width: "18rem" }}
			>
				<img src={card.src} className="card-img-top" alt={card.alt}></img>
				<div className="card-body">
					<h5 className="card-title">{card.name}</h5>
					<p className="card-text">
						Some quick text to build on the card title and make up the bulk of
						the card&apos;s content.
					</p>
					<a href="#" className="btn btn-primary" onClick={randomizer}>
						Go somewhere
					</a>
				</div>
			</div>
		);
	});

	return <main className="d-flex flex-row">{cardList}</main>;
};

export default Card;
