import { useState, useEffect } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Card from "./components/Card";
import getImages from "./utils/getImages";

function App() {
	const [data, setData] = useState(null);
	const [list, setList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getImages();
			setData(result);
		};

		fetchData();
	}, []);

	console.log(data);

	// { id: 1, name: "test1", location: 1, src: "...", alt: "..." },
	// { id: 2, name: "test2", location: 2, src: "...", alt: "..." },
	// { id: 3, name: "test3", location: 3, src: "...", alt: "..." },
	// { id: 4, name: "test4", location: 4, src: "...", alt: "..." },
	// { id: 5, name: "test5", location: 5, src: "...", alt: "..." },
	// { id: 6, name: "test6", location: 6, src: "...", alt: "..." },
	// { id: 7, name: "test7", location: 7, src: "...", alt: "..." },
	// { id: 8, name: "test8", location: 8, src: "...", alt: "..." },
	// { id: 9, name: "test9", location: 9, src: "...", alt: "..." },
	// { id: 10, name: "test10", location: 10, src: "...", alt: "..." },
	// { id: 11, name: "test11", location: 11, src: "...", alt: "..." },
	// { id: 12, name: "test12", location: 12, src: "...", alt: "..." },

	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<Header score={score} highScore={highScore} />
			<Instructions />

			<Card
				cards={list}
				setCards={setList}
				score={score}
				setScore={setScore}
				highScore={highScore}
				setHighScore={setHighScore}
			/>
		</>
	);
}

export default App;
