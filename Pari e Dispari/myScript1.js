//variabili
let pariDispari = prompt("Scegli pari o dispari").toLowerCase();
let numeroUtente = parseInt(Math.floor(prompt("Inserisci un numero da 1 a 5 (in caso di decimale sarà arrotondato per difetto)")))
let numeroRandom = Math.random()


//funzioni
function oneToFive(num) {
   return num = Math.ceil(num * 5);
}

numeroComputer = oneToFive(numeroRandom)

function chiVince(numOne, numTwo) {
    let somma = numOne + numTwo 

    return somma % 2 === 0
}

let control = chiVince(numeroComputer, numeroRandom)

if(control && pariDispari == "pari") {
    console.log("Ci hai azzeccato! complimenti")
}

else if(control && pariDispari == "dispari") {
    console.log("Hai perso, mi dispiace")
}

else if(!control && pariDispari == "dispari") {
    console.log("Ci hai azzeccato! complimenti")
}

else if(!control && pariDispari == "pari") {
    console.log("Hai perso, mi dispiace")
}
/*




function chiVince() {

}





if (chiVince(numeroUtente, ) === "pari") {
    console.log("Hai vinto!")
}

else if (chiVince(numeroUtente) === "dispari") {
    console.log("Hai perso!")
}*/
