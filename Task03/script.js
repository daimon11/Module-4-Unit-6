const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (a, b) => {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Robot') {
      newNames[i] = b + '.' + ' ' + names[i];
    } else {
      newNames[i] = b + ' ' + names[i];
    }
  }
  console.log(newNames);
}

addPrefix(names, 'Mr');
