//Write a function that splits an array into smaller chunks of a given size.

const arrayChunking = function (data, size) {
  let result = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i,i+size))
  }
  return result
};

console.log(arrayChunking([1,2,3,4,5,6,7,8],3))