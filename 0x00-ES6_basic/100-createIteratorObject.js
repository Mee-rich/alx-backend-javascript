export default function createIteratorObject(report) {

	const myarray = [];

	for (const value of Object.values(report.allEmployees))
	{
		myarray.push(...value);
	}

	return myarray;
}
