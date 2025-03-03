//1. write a function to find the first non-repeating character in a string

// function getCharacter(string) {
//     const arr = string.split("") //no spacing
//     const exists = true
//     // console.log(nonRepeatingCharacter)
//     for (let element of arr) {
//         if (string.lastIndexOf(element) > string.indexOf(element)) {
//             continue;
//         } else {
//             console.log(`The first non-repeating character is ${element}`);
//             return;
//         }
//     }
// }

// getCharacter("heroher")


// 2. Write a function to return all the non-repeating characters in a string

function getAllCharacters(string) {
    const arr = string.split("");
    const nonRepeatingCharacters = []
    for (let element of arr) {
        if (string.indexOf(element) < string.lastIndexOf(element)) {
            continue;
        } else {
            nonRepeatingCharacters.push(element)
        }
    }

    console.log(`The non-repeating elements of the string are \n${nonRepeatingCharacters}`)
}


getAllCharacters("hakncaihcabc")