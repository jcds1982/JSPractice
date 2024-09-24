const generateCode = () => {
    // Split code based on index
    // I need to work on something different
    let ibPersonCode = "AAAA99";
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
            console.log(
                `OUTPUT ${ibPersonCodeCharacter}: ${isNaN(
                    Number(ibPersonCode.charAt(ibPersonCodeCharacter))
                )}`
            );
            alphaIndex += ibPersonCode.charAt(ibPersonCodeCharacter);
        } else {
            codeNumber += ibPersonCode.charAt(ibPersonCodeCharacter);
        }
    }

    console.log(`Alpha code: ${alphaIndex}`);
    console.log(`Number code: ${Number(codeNumber)}`);
};

class AlphabeticCharacter {
    constructor(character, position, lastCharacter) {
        this.character = character;
        this.position = position;
        this.lastCharacter = lastCharacter;
    }
}

function transferCodeToLabel(personCode) {
    let codeEntered = document.getElementById("personCode");
    let codeEnteredLabel = document.getElementById("codeEntered");

    codeEnteredLabel.innerText = codeEntered.value;
    console.log(`Code entered --> ${codeEntered.value}`);
    let ac = new AlphabeticCharacter("a", 1, false);
    console.log(`ac ${JSON.stringify(ac, null, 4)}`);
}
