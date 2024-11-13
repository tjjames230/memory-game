const randomizer = (arr) => {
	const copy = [...arr];
	const uniqueNumbers = createUniqueNumbers();

	function createUniqueNumbers() {
		const tempArr = [];

		// initial random numbers
		for (let i = 0; i < arr.length; i++) {
			tempArr.push(Math.floor(Math.random() * arr.length + 1));
		}

		// loop through to check if numbers match any others and reassign until unique
		while (hasDuplicates(tempArr)) {
			for (let i = 0; i < tempArr.length; i++) {
				for (let j = i + 1; j < tempArr.length; j++) {
					if (tempArr[i] == tempArr[j]) {
						tempArr[i] = Math.floor(Math.random() * arr.length + 1);
					}
				}
			}
		}

		return tempArr;
	}

	function hasDuplicates(arr) {
		return new Set(arr).size !== arr.length;
	}

	for (let i = 0; i < copy.length; i++) {
		copy[i].location = uniqueNumbers[i];
	}

	return copy;
};

export default randomizer;
