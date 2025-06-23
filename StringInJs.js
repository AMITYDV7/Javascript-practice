// let see the operation on string in js

//mostly there are 2 way to create a string in java script
// like by " " or ' ' 


//let's take a example of string 
const name = "Amit"
const currentAge = 21

console.log(name + currentAge); // not recommmended or it's outdated


// Now days we use String Interpolation 
//Where we use ''(back ticks) 1 number k side wali key 
//  and ${} for adding any value
// Advantages of this is we can perform any method to this variable by using this interpolation

console.log(`Hello my name is ${name} and my age is ${currentAge}`)
console.log(`hello my mane is ${name.toUpperCase()}`);
console.log(`hello my mane is ${name.length}`);




