import getListStudents from '../0-get_list_students';

describe('getListStudents', () => {
	test('should return an array of student objects', () => {
		const expectedResult = [
			{id: 1, firstName: 'Guillaume', location: 'San Francisco'},
			{id: 2, firstName: 'James', location: 'Columbia'},
			{id: 5, firstName: 'Serena', location: 'San Francisco'},
		];

		const result = getListStudents();
		expect(result).toEqual(expectedResult);
	});

	
	test('should return an array with three student objects', () => {
		const result = getListStudents();
		expect(result).toHaveLength(3);
	});

	test('should have the correct properties in each student object', () => {
		const result = getListStudents();

		result.forEach(student => {
			expect(student).toHaveProperty('id');
			expect(student).toHaveProperty('firstName');
			expect(student).toHaveProperty('location');
		});
	});

});
