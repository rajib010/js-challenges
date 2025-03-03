// 1. Write a function to demonstrate function debouncing

function displayName(name, lastname) {
    console.log(`Hello Mr.${name} ${lastname}`)
}

function debounce(func, time) {
    let timer;
    return function (...args) { //can work with any number of arguments passed to the function
        clearTimeout(timer) //clear prev timeouts if exists
        timer = setTimeout(() => {
            return func(...args)
        }, time)
    }
}

const debounceInstance = debounce(displayName, 3000) //create an instance of the debounce function

// if we donot create an instance then the function is executed immediately, no use of debounce
debounceInstance("rajib", "pokhrel")