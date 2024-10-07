export default function getStudentIdsSum(students) {
	return students.reduce((a, students) => a + students.id, 0);
}
