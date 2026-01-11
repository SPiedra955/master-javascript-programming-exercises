let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
  // your code here
  let result = [];

  for (let designer of inventory) {
    let total = 0;
    let length = designer.shoes.length;
    for (let shoe of designer.shoes) {
      total += shoe.price;
    }
    let avgPrice = total / length;
    result.push({ name: designer.name, averagePrice: avgPrice });
  }
  return result;
}

console.log(renderAverageCostPerDesigner(currentInventory));
