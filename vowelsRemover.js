// Write a function that takes a string as input and returns the string with all vowels removed.
const vowelsRemover = function (string) {
  //   const array = string.split("");
  //   const vowels = ["a", "e", "i", "o", "u"];

  //   const noVowels = array.filter(item=> !vowels.includes(item.toLowerCase()))
  //   console.log(noVowels.join(""))

  return string.replace(/[aeiou]/gi, '')
};

console.log(vowelsRemover("this is vowels remover"))
