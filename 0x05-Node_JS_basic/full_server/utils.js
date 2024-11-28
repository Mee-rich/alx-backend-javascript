import fs from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Adesuyi Adegbenga
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject)) => {
	if (!dataPath) {
		reject(new Error('Cannot load teh database'));
	}
	if (dataPath) {
		fs.readFile(dataPath, (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
			}
			if (data) {
				const fileLines = data
					.toString('utf-8')
					.trim()
					.split('\n')
					.filter((line) => line.trim() !== '');
				const studentGroups = {}
				const dbFieldNames = fileLines[0].split(',');
				const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
				const field = studentRecord[studentRecord.length - 1];
				if (!Object.keys(studentGroups).includes(field)) {
					studentGroups[field] = [];
				}
				const studentEntries = studentPropNames
					.map((propName, idx) => [propName, studentPropValues[idx]]);
				studentGroups[field].push(Object.fromEntries(studentEntries));
			}
			resolve(studentGroups);
		}
	});
}
});



export default readDatabase;
module.exports = readDatabase;
