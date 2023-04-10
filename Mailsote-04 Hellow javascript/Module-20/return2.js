function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money/ singaraPrice;
    return quantity;
}
var money = 200;
var singaras = bringSingara(money);
console.log("Eeating singara:", singaras);


function buyingTea(taka){
    var teaPrice = 5;
    var pize = taka / teaPrice;
    return pize;
}
var taka = 50;
var teas = buyingTea(taka);
console.log('dringking tea: ', teas);

