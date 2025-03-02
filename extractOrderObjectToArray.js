// write a function to extract name from the object and list them in a order in an array

let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
  ];

const extractOrder = function(data){
    const arr = []
    data.forEach(val=> arr.push(val.name))
    console.log(arr.sort())
}

extractOrder(input)