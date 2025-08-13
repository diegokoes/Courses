function rollTheDice(userName, maxOfTries) {
    let results = [];
    let MAX_DICE_NUMBER = 6;
    for (let index = 0; index < maxOfTries; index++) {
        let result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push("".concat(userName, " X"));
        }
        else {
            results.push("".concat(userName, " O"));
        }
    }
    return results;
}
let results = rollTheDice("TypeScript", 4);
console.log(results.map(result => `\t${result}`).join('\n'));
