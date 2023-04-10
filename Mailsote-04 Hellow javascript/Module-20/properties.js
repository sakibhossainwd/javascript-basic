 var shopingCard = {
    book: 5,
    pad: 2,
    pen: 3,
    note: 10
 }

//  when you know the specific property name, use dot notetion to get the properties values.
var pencount = shopingCard.pen;
console.log(pencount);
// alternative System
var pencount2 = shopingCard['pen'];
console.log(pencount2);
// another way
var propertyName = 'note';
var propertyValue = shopingCard[propertyName];
console.log(propertyName, propertyValue);

// finding object property name.
var properties = Object.keys(shopingCard);
console.log(properties);

// fiding object properties values.
var propertyValues = Object.values(shopingCard);
console.log(propertyValues);


// set property values
shopingCard.pad = 6;
console.log(shopingCard);
// another way
shopingCard['pad'] = 8;
console.log(shopingCard);