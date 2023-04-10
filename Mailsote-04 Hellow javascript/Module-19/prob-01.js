var fruit =['Apple', 'Banana', 'Orange']
// a part
var indexOfBanna = fruit.indexOf('Banana');
console.log(indexOfBanna);
// a and part
fruit[1] = 'Mango';
// or
// fruit.splice(1, 1, 'Mango');
console.log(fruit);
// b part
fruit.pop('Orange');
console.log(fruit);
// b and part
fruit.push('Watermelon');
console.log(fruit);