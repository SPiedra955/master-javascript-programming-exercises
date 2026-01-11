let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
  // your code here
  let result = [];
  for (let i = 0; i < inventory.length; i++) {
    let shoes = inventory[i].shoes;
    for (let j = 0; j < shoes.length; j++) {
      let name = shoes[j].name;
      if (name.includes('laced') || name.includes('lace-up')) {
        let split = name.split(' ');
        let index = split.findIndex(word => word === 'lace-up' || word === 'laced');
        result.push({ nameWords: split, targetWordIndex: index });
      }
    }
  }
  return result;
}
console.log(getLaceNameDataForShoes(currentInventory));
