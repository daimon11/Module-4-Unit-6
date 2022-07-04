const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = () => {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Robot') {
      newNames[i] = 'Mr.' + ' ' + names[i];
    } else {
      newNames[i] = 'Mr ' + names[i];
    }
  }
  return newNames
}
console.log(addPrefix());
