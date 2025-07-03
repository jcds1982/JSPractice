function run() {
    let b = "2";
    console.log(b);
    {
        let b = "Hello world ... again!!!";
        console.log("This is another call --> ", b);
        //dfd.
        let c = "testing";
        if (true) {
            console.log("123");
        }
    }
    // Template Literals
    print();
    // Spread
    printSpread(1, 2, 3);
    console.log(butter(4, 5, 6));
}

// Capturing Exception
try {
    const a = 2;
    a = 3;
} catch (exc) {
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = exc;
    console.log(exc);
}

// Template literals
// This is good to create functionality for different languajes.
function print() {
    let luke = "light";
    let vader = "dark";

    let message = `Luke is on ${luke} side while Dart Vader is on the ${vader} side`;
    console.log(message);
}

// Spread
function printSpread(...z) {
    console.log("Print Spread: ", z);
    console.log("Spread: ", butter(4, 5, 6));
}

// This function is from the Udemy ES6 spread practice
// function butter() {
//     let a = [1, 2, 3];
//     return a;
// }

function butter(...z) {
    let a = [1, 2, 3, ...z];
    return a;
}

function showMessage(anotherParamater) {
    alert(anotherParamater);
}
