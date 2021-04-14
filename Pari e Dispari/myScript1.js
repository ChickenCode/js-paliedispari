let pariDispari = prompt("Scegli pari o dispari").toLowerCase();
let numeroUtente = parseInt(Math.floor(prompt("Inserisci un numero da 1 a 5 (in caso di decimale sarà arrotondato per difetto)")))

function chiVince (num) {
num = Math.ceil(Math.random() * 5);

if ((num + numeroUtente) % 2 == 0) {
    return "pari"
}

else if ((num + numeroUtente) % 2 > 0) {
    return "dispari"
}
}



if (chiVince(numeroUtente) === "pari") {
    console.log("Hai vinto!")
}

else if (chiVince(numeroUtente) === "dispari") {
    console.log("Hai perso!")
}
