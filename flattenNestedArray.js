//write a function to flatten a multidimensional array without using flat function

function flattenArray(arr) {
    let newArray = []
    arr.map(item => {
        if (Array.isArray(item)) {
            newArray = newArray.concat(flattenArray(item))
        } else {
            newArray.push(item)
        }
    })

    return newArray
}

console.log(flattenArray([1, 3, 4, [2, 3, 4],[[1, 2, [[1, 2], 3, 4]]]]).join(', '))