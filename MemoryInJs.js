/* there are two types of memory in js:-> Heap and stack
heap generally store primitive data types and stack store non primitive
in heap memory we get copy of variable and in stack we get reference type of data type

*/

let myName = "Amit"
let myName1 = myName // In stack it store and copy of the variable so it does'nt inpact the original value
myName1 = "Amit yadav"

console.log(myName)
console.log(myName1)

console.log("------------------------------------------");


// let take the example of heap memory

let obj1 = {
    email : "user@gmail.com",   // defining object in js
    userNum : 123
}

let obj2 = obj1

console.log(obj.email)
console.log(obj2.email)

// let change the email of any user 

obj.email = "amit@gmail.com" 
 /* by changing any email of any user it will change the both email variable because they both are 
 refering to the same object  
*/
console.log(obj2.email)