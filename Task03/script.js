const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names, b) => {
  let newNames = names.map(item => `${b} ${item}`);
  return newNames;
}

addPrefix(names, 'Mr');
