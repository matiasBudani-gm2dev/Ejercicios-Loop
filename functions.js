const prompt = require("prompt-sync")()
// functions
function isNumber(variable, integerVerification=false){
    let verificationNumber = !isNaN(variable) && typeof variable === 'number' && variable !== null
    if(verificationNumber && integerVerification){
        return variable % 1 == 0
    }
    return verificationNumber
}

module.exports = { isNumber};