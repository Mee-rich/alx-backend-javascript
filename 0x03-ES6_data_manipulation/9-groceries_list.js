export default function groceriesList() {
	const finalMap = new Map();

	const obj = {
		Apples: 10,
		Tomatoes: 10,
		Rice: 1,
		Pasta: 1,
		Banana: 5,
	};

	Object.keys(obj).forEach((item) => {
		finalMap.set(item, obj[item]);
	});

	return finalMap;
}
