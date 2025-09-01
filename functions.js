const prompt = require("prompt-sync")()
// functions
function isNumber(variable, integerVerification=false){
    let verificationNumber = !isNaN(variable) && typeof variable === 'number' && variable !== null
    if(verificationNumber && integerVerification){
        return variable % 1 == 0
    }
    return verificationNumber
}

function numBiggerThan(num1, num2){
    return num1>num2
}

function verifyPrimeNumber(num){
    divisores = 0
    for(let i = num; i > 0; i--){
        if (num % i == 0){
            divisores++
        }
    }
    return divisores == 2
}

module.exports = { isNumber, numBiggerThan, verifyPrimeNumber };
