import { useState } from "react";
import randomizer from "../utils/randomizer";

const Card = ({
	cards,
	setCards,
	score,
	setScore,
	highScore,
	setHighScore,
}) => {
	const sortedList = cards.sort((a, b) => a.location - b.location);

	const [cardIds, setCardIds] = useState([]);

	const reset = () => {
		setCardIds([]);
		setScore(0);
	};

	const handleClick = (card) => {
		const tempCards = randomizer(cards);
		setCards(tempCards);

		if (!cardIds.includes(card.id)) {
			const tempIds = [...cardIds];
			increaseScore();
			tempIds.push(card.id);
			setCardIds(tempIds);
			console.log(cardIds);
		} else {
			if (score > highScore) {
				setHighScore(score);
			}

			reset();
		}
	};

	const increaseScore = () => {
		setScore(score + 1);
	};

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
					<a className="btn btn-primary" onClick={() => handleClick(card)}>
						Go somewhere
					</a>
				</div>
			</div>
		);
	});

	return (
		<main className="d-flex flex-row flex-wrap row-gap-4 column-gap-4 justify-content-center">
			{cardList}
		</main>
	);
};

export default Card;
