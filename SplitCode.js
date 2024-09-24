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
    document.getElementById("codeEnteredResult").innerHTML = `${message}`;
};

// Transfer the code entered to a html label.
let transferCodeToLabel = (personCode) => {
    let codeEntered = document.getElementById("personCode");
    let codeEnteredLabel = document.getElementById("codeEntered");
    console.log(`Code entered: ${codeEntered.value}`);
    generateCode(codeEntered.value);
    codeEnteredLabel.innerText = codeEntered.value;
};
