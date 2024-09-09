// Split code based on index
let ibPersonCode = "AA3911";
let max = new Map();

let alphaIndex = "";
let codeNumber = "";

max.set(1, 1);
max.set(2, 2);
max.set(3, 2);
max.set(3, 5);
console.log(max);
let ibPersonCodeLength = ibPersonCode.length;
console.log(ibPersonCodeLength);
// console.log(Number("a"));
//console.log("OUTPUT : ", isNaN(Number(ibPersonCode.charAt(0))));

for (
    ibPersonCodeCharacter = 0;
    ibPersonCodeCharacter <= ibPersonCodeLength - 1;
    ibPersonCodeCharacter++
) {
    if (isNaN(Number(ibPersonCode.charAt(ibPersonCodeCharacter)))) {
        // console.log(
        //     `OUTPUT ${ibPersonCodeCharacter}: ${isNaN(
        //         Number(ibPersonCode.charAt(ibPersonCodeCharacter))
        //     )}`
        // );
        alphaIndex += ibPersonCode.charAt(ibPersonCodeCharacter);
    } else {
        codeNumber += ibPersonCode.charAt(ibPersonCodeCharacter);
    }
}

console.log(`Alpha code: ${alphaIndex}`);
console.log(`Number code: ${Number(codeNumber)}`);
b;
