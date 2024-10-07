export default function updateStudentsGradeByCity(students, city, newGrades) {
	return students
		.filter((sudents) => students.location === city)
		.map((students) => {
			const gradesObj = newGrades.find((grade) =>  grade.studentId === student.Id);

			return {
				...students,
				grade: gradeObj ? gradeObj.grade : 'N/A',
			};
		});
}
