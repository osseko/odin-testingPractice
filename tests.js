//capitalize

function capitalize(toCapitalize){
    const newCapitalize = toCapitalize[0].toUpperCase() + toCapitalize.slice(1);
    return newCapitalize;
}

console.log(capitalize("rebel"));
//reverseString

function reverseString(toReverse){
    const newReverse = toReverse.split('').reverse().join('');
    return newReverse;
}

console.log(reverseString("revel"));
//calculator

//number1, number2, operation

function calculator(a, b, operation){
    //add, subtract, divide, multiply
    if(operation === "add"){
        return a + b;
    }if(operation === "subtract"){
        return a - b;
    }if(operation === "divide"){
        return a / b;
    }if(operation === "multiply"){
        return a * b;
    }
}

console.log(calculator(1,2, "subtract"));

//caesarCipher


 const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

 const cipher =  ["d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c"]

 let indexes = [];

 const sampString = "sampleString";

 const newString = sampString.toLowerCase().split("");

 newString.forEach((letter) => indexes.push(alphabet.indexOf(letter)));

 console.log(indexes);

 let cipherArr = [];
 const newCipher = indexes.forEach((value) => cipherArr.push(cipher[value]));

 const encryptedArr = cipherArr.join("");

 console.log("cipher", encryptedArr);

function caesarCipher(toEncrypt){
   


}

//analyzeArray

        //average(sum/totalnumber(length))/min(lowest)/max(highest)/length

function analyzeArray(setOfArray){

    const setLength = setOfArray.length;

    const arraySum = setOfArray.reduce((sum, current) => sum + current, 0)
    const setAverage = arraySum / setLength;

    const lowest = setOfArray.sort((a, b) => a - b);
    const setMin = lowest[0];
    
    const highest = setOfArray.sort((a, b) =>  b - a);
    const setMax = highest[0];
   
    return{
        average: setAverage,
        min: setMin,
        max: setMax,
        length: setLength 
    }

}


console.log(analyzeArray([5, 10, 16, 8,]));


