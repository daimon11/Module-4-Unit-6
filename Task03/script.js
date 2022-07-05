const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (a, b) => {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
      newNames[i] = b + ' ' + names[i];
  }
  console.log(newNames);
}

addPrefix(names, 'Mr');
