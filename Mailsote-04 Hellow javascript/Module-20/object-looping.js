
var shopingItem = ['book', 'pad', 'pen', 'note'];
var friendsAge = [12, 15, 35, 41, 32];
var frinendsAge = {
    jahangir: 22,
    shorab: 21,
    jakir: 23,
    soboj: 20
}

var shoppingCart = {
    books: 5,
    pad: 2,
    pen: 3,
    note: 4
}
const keys = Object.keys(shoppingCart);
console.log(keys);


// 
for(var i = 0; i < keys.length; i++){
    var propertiesName = keys[i];
    var propertyValue = shoppingCart[propertiesName];
    console.log(propertiesName, propertyValue);
}

// for in
for(var propertiesName in shoppingCart){
    const value = shoppingCart[propertiesName];
    console.log(propertiesName, value);
}