
//1.array

const nums = [2, 4, 5, 2, 1, 2];
const k = 4;

let count = 0;

for (let i = 0; i < nums.length; i++) {
    
   
    if (nums[i] === k) {
        count++;
    }
}
console.log(count); 

//2. intersection

function intersection(arr1, arr2) {
    let result = []; // To store common elements

    // Loop through arr1
    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];

        // Check:
        // 1. element is in arr2
        // 2. element is NOT already in result (to avoid duplicates)
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}
console.log(intersection([1, 2, 6, 4], [3, 4, 5, 6]));

//3. function declartion

function userProfile(name) {
    console.log("Hello, " + name + "!");
}

// Example call
userProfile("arun");


const double = (num) => {
    return num * 2;
};

// Example call
console.log(double(5)); // Output: 10

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


function getUserData(callback) {
    // Simulate fetching data
    setTimeout(() => {
        callback();  // Call the callback after 3 seconds
    }, 3000);
}
getUserData(function() {
    console.log("Call Back Function");
});
