function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var total = add(80, 20);
console.log('total', total);


function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 200;

var fastFood = bringSingara(myTaka);

console.log('total singara:', fastFood);  