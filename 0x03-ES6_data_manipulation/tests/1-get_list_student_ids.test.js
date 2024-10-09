import getListStudentIds from '../1-get_list_student_ids';
import getListStudents from '../0-get_list_students';

describe('getListStudentsIds', () => {
	test('should return an array of student ids when given a valid student list', () => {
		const expectedIds = [1, 2, 5];
		const result = getListStudentIds(getListStudents());
		expect(result).toEqual(expectedIds);
	});

	test('should return an empty array when the input is not an array', () => {
		expect(getListStudentIds('hello')).toEqual([]);
		expect(getListStudentIds('not an array')).toEqual([]);
		expect(getListStudentIds(123)).toEqual([]);
		expect(getListStudentIds({})).toEqual([]);
		expect(getListStudentIds(null)).toEqual([]);
		expect(getListStudentIds(undefined)).toEqual([]);
	});

	test('should return sn empty array when given an empty array', () => {
		expect(getListStudentIds([])).toEqual([]);
	});
});
