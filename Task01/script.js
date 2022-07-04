const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const faledStudents = ['Сидоров','Смирнов','Попов'];

const filter = () => {
  let difference = allStudents.filter(num => !faledStudents.includes(num));
  return difference;
}

console.log(filter())