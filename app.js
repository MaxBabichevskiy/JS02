// Функция фильтрации по оценке
function filterByGrade(students, minGrade) {
  return students.filter(student => student.grade >= minGrade);
}

// Функция сортировки по возрасту
function sortByAge(students) {
  return students.slice().sort((a, b) => a.age - b.age);
}

// Функция подсчета среднего балла
function calculateAverageGrade(students) {
  if (students.length === 0) return 0;
  
  const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
  return totalGrade / students.length;
}

// Функция поиска студента по имени
function findByName(students, name) {
  return students.find(student => student.name === name) || null;
}


const studentData = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 21, grade: 78 },
];

const minGrade = 80;
const filteredStudents = filterByGrade(studentData, minGrade);
console.log("Студенты с оценкой выше или равной " + minGrade + ":");
console.log(filteredStudents);

const sortedStudents = sortByAge(studentData);
console.log("Студенты, отсортированные по возрасту:");
console.log(sortedStudents);

const averageGrade = calculateAverageGrade(studentData);
console.log("Средний балл по всем студентам: " + averageGrade);

const searchName = "Bob";
const foundStudent = findByName(studentData, searchName);
console.log("Студент с именем " + searchName + ":");
console.log(foundStudent);
