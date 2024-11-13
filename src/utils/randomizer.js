const randomizer = () => {
	const test = [
		{
			name: 1,
			location: 1,
		},
		{
			name: 2,
			location: 2,
		},
		{
			name: 3,
			location: 3,
		},
		{
			name: 4,
			location: 4,
		},
		{
			name: 5,
			location: 5,
		},
	];

	const copy = [...test];
	const uniqueNumbers = createUniqueNumbers();

	function createUniqueNumbers() {
		const arr = [];

		// initial random numbers
		for (let i = 0; i < test.length; i++) {
			arr.push(Math.floor(Math.random() * test.length + 1));
		}

		// loop through to check if numbers match any others and reassign until unique
		while (hasDuplicates(arr)) {
			for (let i = 0; i < arr.length; i++) {
				for (let j = i + 1; j < arr.length; j++) {
					if (arr[i] == arr[j]) {
						arr[i] = Math.floor(Math.random() * test.length + 1);
					}
				}
			}
		}

		return arr;
	}

	function hasDuplicates(arr) {
		return new Set(arr).size !== arr.length;
	}

	console.log(uniqueNumbers);
};

export default randomizer;
