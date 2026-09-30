//Task 1
let newArray = Array(7);
let filledArray = newArray.fill("Hello");
console.log(filledArray);

//Task 2
filledArray.fill("Hi", 2, 5);
console.log(filledArray);

//Task 3
let numbers = Array(5);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i * 10;
}

console.log(numbers);
