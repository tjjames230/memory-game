const getImages = async () => {
	const urlPageOne = "https://swapi.dev/api/people/";
	const urlPageTwo = "https://swapi.dev/api/people/?page=2";
	const data = [];

	try {
		const [response1, response2] = await Promise.all([
			fetch(urlPageOne),
			fetch(urlPageTwo),
		]);

		if (!response1.ok || !response2.ok) {
			throw new Error(`One or more requests failed`);
		}

		const people1 = await response1.json();
		const people2 = await response2.json();

		for (let i = 0; i < people1.results.length; i++) {
			data.push(people1.results[i]);
		}

		for (let i = 0; i < 2; i++) {
			data.push(people2.results[i]);
		}
	} catch (error) {
		console.error(error.message);
	}

	return data;
};

export default getImages;
