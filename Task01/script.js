const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const faledStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, faledStudents) => {
  let result = allStudents.filter(item => !faledStudents.includes(item));
  return result;
}

console.log(filter(allStudents, faledStudents));