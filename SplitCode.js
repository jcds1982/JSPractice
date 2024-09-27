// Split code based on index
let generateCode = (ibPersonCode) => {
    let alphaIndex = "";
    let codeNumber = "";
    let message = "";
    let ibPersonCodeLength = ibPersonCode.length;

    for (
        ibPersonCodeCharacter = 0;
        ibPersonCodeCharacter <= ibPersonCodeLength - 1;
        ibPersonCodeCharacter++
    ) {
        message = `CHARACTER #${ibPersonCodeCharacter + 1}: ${isNaN(
            Number(ibPersonCode.charAt(ibPersonCodeCharacter))
        )}`;
        if (isNaN(Number(ibPersonCode.charAt(ibPersonCodeCharacter)))) {
            alphaIndex += ibPersonCode.charAt(ibPersonCodeCharacter);
        } else {
            codeNumber += ibPersonCode.charAt(ibPersonCodeCharacter);
        }
        console.log(message);
    }

    console.log(`Alpha code: ${alphaIndex}`);
    console.log(`Number code: ${Number(codeNumber)} \n`);
    document.getElementById(
        "codeEnteredResult"
    ).innerHTML = `AlphaIndex: ${alphaIndex} </br>
    Code Number: ${codeNumber} </br>  ${message}`;
};

// Transfer the code entered to a html label.
let transferCodeToLabel = (personCode) => {
    let codeEntered = document.getElementById("personCode");
    let codeEnteredLabel = document.getElementById("codeEntered");
    console.log(`Code entered: ${codeEntered.value}`);
    generateCode(codeEntered.value);
    codeEnteredLabel.innerText = codeEntered.value;
};

const testingMaps = () => {
    // Initial map
    let sequence = new Map();
    sequence.set(1, { value: "a", nextKey: "2" });
    console.log(JSON.stringify(sequence.get(1), null, 4));

    // Setting Map
    let viewMapOnLog = new Map();
    viewMapOnLog.set("a", "b");
    viewMapOnLog.set("c", "d");
    viewMapOnLog.set("d", "e");
    console.log("viewMapOnLog : ", viewMapOnLog);
};

//testingMaps();

const generateLeadingZeroes = () => {
    let numberA = "00009";
    let numberB = "00001";
    let totalLength = numberA.length;
    let total = (Number(numberA) + Number(numberB)).toString();
    console.log(typeof total);
    console.log(`Total : ${total}`);

    // Adding leading zeroes
    total = total.padStart(numberA.length, "0");
    console.log(`Leading Zeros ${total}`);

    // In APEX you can use leftPad(length, character)
    /**
     * String a = '10';
     * system.debug(a.leftPad(5,'0'));
     * OUTPUT: 00010
     */
};

// generateLeadingZeroes();
