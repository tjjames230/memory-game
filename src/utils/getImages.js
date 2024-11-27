const getImages = async () => {
	const urls = [
		"https://pokeapi.co/api/v2/pokemon/1",
		"https://pokeapi.co/api/v2/pokemon/2",
		"https://pokeapi.co/api/v2/pokemon/3",
		"https://pokeapi.co/api/v2/pokemon/4",
		"https://pokeapi.co/api/v2/pokemon/5",
		"https://pokeapi.co/api/v2/pokemon/6",
		"https://pokeapi.co/api/v2/pokemon/7",
		"https://pokeapi.co/api/v2/pokemon/8",
		"https://pokeapi.co/api/v2/pokemon/9",
		"https://pokeapi.co/api/v2/pokemon/10",
		"https://pokeapi.co/api/v2/pokemon/11",
		"https://pokeapi.co/api/v2/pokemon/12",
	];

	const callPokeAPI = async (urls) => {
		try {
			const responses = await Promise.all(
				urls.map(async (url) => {
					const response = await fetch(url);

					if (!response.ok) {
						throw new Error("failed to fetch data");
					}

					return response.json();
				})
			);

			return responses;
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};

	return await callPokeAPI(urls);
};

export default getImages;
