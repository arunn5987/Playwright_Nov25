

// 1. Print the number odd or even

var number = 17;

function isOddOrEven(num) {


    if (num % 2 === 0) {
        return  " Printed number is Even:" +num ;
    } else {
        return " Printed number is odd : " +num;
    }
}

console.log(isOddOrEven(number));


// 2 . check the number is positive or negative or zero

let value = -11;

function checkNumber(num) {

    if (num > 0) {
        return "given number is  positive :" +num;
    } 
    else if (num < 0) {
         return "given number is  negative :" +num;
    } 
    else {
        return "given number is neutral or zero";
    }
}

console.log(checkNumber(value));




// 3. a) launchBrowser function
function launchBrowser(browserName) {

    // Use if-else
    if (browserName === "chrome") {
        console.log("Launching Chrome Browser...");
    } else {
        console.log("Launching Default Browser...");
    }
}


// 3. b) runTests function
function runTests(testType) {

    // Use switch-case
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;

        case "sanity":
            console.log("Running Sanity Tests...");
            break;

        case "regression":
            console.log("Running Regression Tests...");
            break;

        default:
            console.log("Running Default: Smoke Tests...");
    }
}

launchBrowser("chrome");
runTests("default");


