function transformEmployeeData(array) {
  // your code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let ob = {};
    for (let j = 0; j < array[i].length; j++) {
      let key = array[i][j][0];
      let value = array[i][j][1];
      ob[key] = value;
    }
    result.push(ob);
  }
  return result;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]