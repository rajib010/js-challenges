// Write a function that takes an array of objects as input. Each object represents a person with properties name and age. The function should return the names of all people who are older than a specified age.

const namePrinter = function (data, age) {
  data.forEach(item => item.age > age ? console.log(item.name, "\n") : "");
};

const data = [
  {
    name: "rajib",
    age: 20,
  },
  {
    name: "rupesh",
    age: 25,
  },
  {
    name: "rachit",
    age: 15,
  },
  {
    name: "sabina",
    age: 20,
  },
  {
    name: "salina",
    age: 12,
  },
];

namePrinter(data, 22);
