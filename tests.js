// //capitalize

// export function capitalize(toCapitalize){
//     const newCapitalize = toCapitalize[0].toUpperCase() + toCapitalize.slice(1);
//     return newCapitalize;
// };

// //reverseString

// export function reverseString(toReverse){
//     const newReverse = toReverse.split('').reverse().join('');
//     return newReverse;
// };

// //calculator

// export function calculator(a, b, operation){
//     //add, subtract, divide, multiply
//     if(operation === "add"){
//         return a + b;
//     }if(operation === "subtract"){
//         return a - b;
//     }if(operation === "divide"){
//         return a / b;
//     }if(operation === "multiply"){
//         return a * b;
//     }
// };

//caesarCipher
// /\W+/g
function caesarCipher(toEncrypt, index){

 const alphabet = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]

//  const cipher =  ["d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c"]

 let indexes = [];
 let cipherArr = [];

 const adjustment = index * 2;
 const newString = toEncrypt.split("");

    function findAdjustment(){
        //if adjustment > 52 : (adjustment - 52) => alphabet[0 + result]
    }

 console.log(newString);

 newString.forEach((letter) => 
    {if(letter.match(/[a-zA-Z]+/g)){
        indexes.push(alphabet.indexOf(letter))
    }else{
        indexes.push(letter);
    }});

    console.log("index", indexes);

  const newCipher = indexes.forEach((value) => 
    {if(value.length){
        cipherArr.push(value)
     }else{
        cipherArr.push(alphabet[value + adjustment])
    }});

 console.log(cipherArr)

 const encryptedArr = cipherArr.join("");
 
 return encryptedArr;

};

console.log(caesarCipher("TO beyond", 3));
//analyzeArray

// export function analyzeArray(setOfArray){

//     const setLength = setOfArray.length;

//     const arraySum = setOfArray.reduce((sum, current) => sum + current, 0)
//     const setAverage = arraySum / setLength;

//     const lowest = setOfArray.sort((a, b) => a - b);
//     const setMin = lowest[0];
    
//     const highest = setOfArray.sort((a, b) =>  b - a);
//     const setMax = highest[0];
   
//     return{
//         average: setAverage,
//         min: setMin,
//         max: setMax,
//         length: setLength 
//     }

// };


// export function sum(a, b) {
//  return a + b  
// };


