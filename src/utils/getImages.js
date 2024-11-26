const getImages = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon/1/";
	const data = [];

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`request failed`);
		}

		const pokemon = await response.json();
		console.log(pokemon);

		for (let i = 0; i < 12; i++) {
			data.push(pokemon.results[i]);
		}
	} catch (error) {
		console.error(error.message);
	}

	return data;
};

export default getImages;
