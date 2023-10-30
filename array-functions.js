let myArr = [50, 10, 40, 30, 60, 70, 20];

let mapOutput = myArr.map((value, index) => {
  return value * 2;
});

console.log("Map Output: ", mapOutput);

let forEachOutput = myArr.forEach((value, index) => {
  console.log("Value (inside ForEach): ", value * 2);
  return value * 2;
});

console.log("ForEach Output: ", forEachOutput);

console.log("Reduce Without Second Parameter:");

let reduceOutput1 = myArr.reduce((sum, value, index) => {
  console.log(`Iteration ${index} -> Sum: ${sum}, Value: ${value}`);
  return sum + value;
});

console.log("Reduce With Second Parameter:");

let reduceOutput2 = myArr.reduce((sum, value, index) => {
  console.log(`Iteration ${index} -> Sum: ${sum}, Value: ${value}`);
  return sum + value;
}, 100);

console.log("Reduce 1: ", reduceOutput1);
console.log("Reduce 2: ", reduceOutput2);

let everyOutput1 = myArr.every((value) => {
  return value < 11;
});

console.log("Every Output1: ", everyOutput1);

let everyOutput2 = myArr.every((value) => {
  return value < 50;
});

console.log("Every Output2: ", everyOutput2);

// Some

let someOutput1 = myArr.some((value) => {
  return value < 11;
});

let someOutput2 = myArr.some((value) => {
  return value < 1;
});

console.log("Some Output 1: ", someOutput1);
console.log("Some Output 2: ", someOutput2);

// Entries

let entriesOutput = myArr.entries();
console.log("Entries Output: ", entriesOutput);
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());
console.log("Entries using next(): ", entriesOutput.next());

// Fill
// let fillOutput1 = myArr.fill(1000);

// console.log("Fill Output1: ", fillOutput1);
// console.log("MyArr After Fill: ", myArr);

// let fillOutput2 = myArr.fill(500, 3);
// console.log("Fill Output2: ", fillOutput2);

// let fillOutput3 = myArr.fill(200, 2, 5);
// console.log("Fill Output3: ", fillOutput3);

// FIND LAST

const findLastOutput = myArr.findLast((value) => {
  return value < 30;
});

console.log("Find Last Output: ", findLastOutput);

const findIndexOutput = myArr.findIndex((value) => {
  return value > 30;
});

console.log("Find Index Output: ", findIndexOutput);

const findOutput = myArr.find((value) => {
  return value > 30;
});

console.log("Find Output: ", findOutput);

// SORT:
// let sortedArr1 = myArr.sort(); // not so effective
// console.log("Sorted 1: ", sortedArr1);

// Ascending Order
myArr.sort((a, b) => {
  return a - b;
});
console.log("My Arr:(Asc)", myArr);

// Descending Order
myArr.sort((a, b) => {
  return b - a;
});
console.log("My Arr:(Desc) ", myArr);

// console.log("Sorted 2:  ", sortedArr2);
// console.log("Sorted 3: ", sortedArr3);

// KEYS

let myKeys = myArr.keys();

console.log("My Keys: ", myKeys);
console.log("My Keys: ", myKeys.next());
console.log("My Keys: ", myKeys.next());
console.log("My Keys: ", myKeys.next());

// VALUES

let myValues = myArr.values();
console.log("My Values: ", myValues);
console.log("myValue:", myValues.next());
console.log("myValue:", myValues.next());
console.log("myValue:", myValues.next());
