const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const faledStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(allStudents[key]);

const filter = (allStudents, faledStudents) => {
  let result = [];
  let a = [];
  for (let i = 0; i < allStudents.length; i++) {
    a[allStudents[i]] = true;
  }
  for (let i = 0; i < faledStudents.length; i++) {
    if (a[faledStudents[i]]) {
      delete a[faledStudents[i]];
    } else {
      a[faledStudents[i]] = true;
    };
  }
  for (let k in a) {
    result.push(k);
  }
  return result;
}

console.log(filter(allStudents, faledStudents));