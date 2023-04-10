function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log(myFeet); 
// another push perameter
const youInches = 108;
const youFeet = inchToFeet(youInches);
console.log(youFeet);