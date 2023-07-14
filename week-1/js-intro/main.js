// Homework and Exercise Document

/* EXERCISE
    1) Write a function which can print today’s date
    2) Write a function which checks if a number is a perfect square
*/


// Exercise 1


const date = function () {
    const currentDate = Date()
    console.log(`Current Date: ${currentDate}`);
};

// Exercise 2

const perfectSquare = function(x) {
    const squareRoot =  Math.sqrt( x );
    const squareRootTest = Number.isInteger(squareRoot)
    if (squareRootTest === true) {
        return(console.log(`${x} is a perfect square -- the square root of ${x} is ${squareRoot}`))
    } else {
        return(console.log(`${x} is not a perfect square`));
    }
};

