import { useState } from "react";
import Card from "./components/Card";

function App() {
	const [list, setList] = useState([
		{ id: 1, name: "test1", location: 3, src: "...", alt: "..." },
		{ id: 2, name: "test2", location: 1, src: "...", alt: "..." },
		{ id: 3, name: "test3", location: 2, src: "...", alt: "..." },
		{ id: 4, name: "test4", location: 4, src: "...", alt: "..." },
		{ id: 5, name: "test5", location: 5, src: "...", alt: "..." },
		{ id: 6, name: "test6", location: 6, src: "...", alt: "..." },
		{ id: 7, name: "test7", location: 7, src: "...", alt: "..." },
		{ id: 8, name: "test8", location: 8, src: "...", alt: "..." },
		{ id: 9, name: "test9", location: 9, src: "...", alt: "..." },
		{ id: 10, name: "test10", location: 10, src: "...", alt: "..." },
		{ id: 11, name: "test11", location: 11, src: "...", alt: "..." },
		{ id: 12, name: "test12", location: 12, src: "...", alt: "..." },
	]);

	return <Card cards={list} setCards={setList} />;
}

export default App;
