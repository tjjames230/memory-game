import Card from "./components/Card";

function App() {
	const cardList = [
		{
			id: 1,
			name: "test",
			location: 3,
			src: "...",
			alt: "...",
		},
		{
			id: 2,
			name: "test2",
			location: 1,
			src: "...",
			alt: "...",
		},
		{
			id: 3,
			name: "test3",
			location: 2,
			src: "...",
			alt: "...",
		},
	];

	return <Card cards={cardList} />;
}

export default App;
