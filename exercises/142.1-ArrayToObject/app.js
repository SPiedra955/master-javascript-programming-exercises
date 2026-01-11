function transformFirstAndLast(array) {
  // your code here
  let dic = [];
  let newObj = {};
  dic.push(array[0]);
  dic.push(array[array.length - 1]);
  let key = dic[0];
  let value = dic[1];
  newObj[key] = value;
  return newObj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
