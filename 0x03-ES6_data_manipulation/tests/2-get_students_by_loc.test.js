import getStudentsByLocation from '../2-get_students_by_loc.js';
import getListStudents from '../0-get_list_students.js';

describe('getStudentsByLocation', () => {
	test('should return an array of students located in the specified city', () => {
		const students = getListStudents();
		const expectedResult = [
			{id: 1, firstName: 'Guillaume', location: 'San Francisco'},
			{id:5, firstName: 'Serena', location: 'San Francisco'},
		];
		const result = getStudentsByLocation(students, 'San Francisco');
		expect(result).toEqual(expectedResult);
	});

	test('should return an empty arra if no students are located in the specified city', () => {
		const students = getListStudents();
		const result = getStudentsByLocation(students, 'California');
		expect(result).toEqual([]);
	});

	test('should return an empty array if the students list is empty', () => {
		const result = getStudentsByLocation([], 'San Francisco');
	});
});
