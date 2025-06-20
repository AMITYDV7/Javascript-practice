console.log(null == 0); // no conversion so false output
console.log(null > 0); // conversion occur null converted into 0 then output is false
console.log(null >= 0); //conversion  happens so null equal to zero 
console.log(null <= 0); // same here

console.log(null == undefined); // both convert into zero so 0 == 0 output will be true
console.log(null >undefined); // after convertion zero is not greater or lesser than 0 it self
console.log(null <undefined); // so the output will false

console.log("--------------------------");

// === for strict check it will check the data type of variable too

console.log("2"== 2);// true output will be true because it will check only value 
console.log("2"=== 2);// false because it will check there datatypes of the variables

// Declaring symbols

const demoOFSymbol= Symbol("Amit");
const demoOFSymbol1 = Symbol("Amit");

console.log(demoOFSymbol ==demoOFSymbol1) // 