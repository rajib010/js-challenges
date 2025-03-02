//write a function that returns the sum of the even number of the array

let numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((s = 0, num) => {
   return num%2==0? s+=num : s;
});

console.log(sum)