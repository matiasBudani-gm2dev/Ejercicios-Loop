const prompt = require("prompt-sync")()
const {isNumber} = require('./functions.js')
/* 12. Crear un programa que pida ingresar usuario y contraseña. El programa debe
permitir hasta 3 intentos, cuando el usuario y/o la contraseña son incorrectos. Si se
ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje
de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y
terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables. */
userName = "soyCrackAnashe2012"
password = "Minecraft1234"
sessionCounter = 0
while(sessionCounter < 3){
    let userInput = prompt("Ingrese el nombre de usuario: ")
    let passwordInput = prompt("Ingrese su contraseña: ")
    if(userInput.trim() !== '' && passwordInput.trim() !== ''){
        if(userInput.toLocaleLowerCase() === userName.toLocaleLowerCase() && passwordInput === password){
            console.log("Ha iniciado sesion exitosamente\nBienvenido " + userName)
            break;
        }else{
            sessionCounter ++
            console.log(sessionCounter)
            sessionCounter !== 3 ?
                console.log("Usuario o contraseña incorrecta, le quedan " + (3-sessionCounter) + " intentos") 
                :
                console.log("Demasiados intentos erroneos")
        }
    }else{
        console.log("Ha ingresado uno o mas campos vacios")
    }
}