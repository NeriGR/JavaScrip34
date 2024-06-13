/*
const pointsPerDice = (numberOnDice) => {
    let result;
    switch (numberOnDice) {
        case "1":
            result= "Ganaste 5 puntos"
            break
        case "3":
            result= "Ganaste 10 puntos"
            break
        case "5":
            result= "Ganaste 15 puntos"
            default: "Vuelve a intentarlo"
    }
    return result;
}
let numberOnDice = pointsPerDice("1");
console.log(numberOnDice);


const groupsUniform = (colorUnifiom) => {
    let result;
    switch (colorUnifiom) {
        case "Gris":
            result= "Pertenece al grupo 1"
            break
        case "Negro":
            resutl= "Pertenece al grupo 2"
            break
        case "Azul":
            result= "Pertenece al grupo 3"
            break
    }
    return result;
}
let colorUnifiom = groupsUniform ("Azul");
console.log(colorUnifiom);



const twoDice = (firstDiceValue, secondDiceValue) => {
    let puntaje = firstDiceValue + secondDiceValue;
    switch (puntaje) {
    case 7:
    case 3:
    case 11:
     console.log("Ganaste");
     break;
    default:
    if(firstDiceValue === secondDiceValue || (puntaje % 3 === 0 && puntaje !== 3)) {
        console.log("Tira de nuevo");
    }   else {
        console.log("Lo siento, perdiste");
    }
 }

}
twoDice(2, 5);

*/

/*1*/
let phraseYoda = "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
    console.log("El numero de caracteres de esta frase son:", phraseYoda.length);

/*2*/
let phraseYoda1 = "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
for(let i = 0; i < phraseYoda1.length; i++){
    console.log(i,":", phraseYoda1[i]);
}

/*3*/
let phraseYodaS = "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
let vocalesRegex = /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g;
let vocalesEncontradas = phraseYoda.match(vocalesRegex);
let cantidadVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;
    console.log("El numero de Vocales en esta frase es de:", cantidadVocales);

/*4*/
let frase = "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
let consonantesRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
let consonantesEncontradas = frase.match(consonantesRegex);
let cantidadConsonantes = consonantesEncontradas ? consonantesEncontradas.length : 0;
    console.log("El numero de consonantes en esta frase es de:", cantidadConsonantes); 
