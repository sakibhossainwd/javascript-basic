// String reverse
function reverseString(text){
    var reversed = '';
    for(var i = text.length - 1; i >= 0; i--){
        var element = text[i];
        reversed = reversed + element;
        // console.log(element, reversed);
    };
    return reversed
}

const myString = 'I am a good boy'
const reversed = reverseString(myString);
// console.log('reversed output', reversed);


// Word reverse
function reverseWord(str){
    const words = str.split(' ');
    console.log(words);
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    let storeWord = [];
    for(var i = words.length - 1; i >= 0; i--){
        var element = words[i];
        storeWord.push(element);
    }
    const reversed = storeWord.join(' ');
    // return storeWord;
    return reversed;
}

const mystring = 'I am good boy';
const reversedWordArary = reverseWord(myString);
console.log(reversedWordArary);


