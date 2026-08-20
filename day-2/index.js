//.map
// const num = [1,2,3]
// const updatedNum = num.map(n=>n*2)
// console.log(updatedNum);
// 
// const user = {
//   name: "Sam",
//   greet() { console.log(this.name); } 
// };
// // user.greet(); // Called by 'user', so 'this' is 'user'. Output: "Sam"


// const hiker = { name: "Ben" };
// user.greet.call(hiker); // Forced to use 'hiker'. Output: "Ben"


// function greet(user = "Guest") {
//   console.log(`Hello, ${user}`);
// }

// greet(undefined); // Output: "Hello, Guest" (triggers default)
// greet(null);      // Output: "Hello, null" (respects explicit null)

// const id = Symbol("id");
// const person = { [id]: 101, name: "Alex" };

// // 1. Get ONLY symbol properties
// const symbols = Object.getOwnPropertySymbols(person);
// console.log(symbols); // Output: [ Symbol(id) ]

// // 2. Get ALL properties (both strings and symbols)
// const allKeys = Reflect.ownKeys(person);
// console.log(allKeys); // Output: [ 'name', Symbol(id) ]
