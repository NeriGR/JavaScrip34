const pointsPerDice = (numberOnDice) => {
    let resultl;
    switch (numberOnDice) {
        case "1":
            resultl= "Ganaste 5 puntos"
            break
        case "3":
            resultl= "Ganaste 10 puntos"
            break
        case "5":
            resultl= "Ganaste 15 puntos"
            default: "Vuelve a intentarlo"
    }
    return resultl;
}
let numberOnDice = pointsPerDice("1");
console.log(numberOnDice);


const groupsUniform = (colorUnifiom) => {
    let resutl;
    switch (colorUnifiom) {
        case "Gris":
            resutl= "Pertenece al grupo 1"
            break
        case "Negro":
            resutl= "Pertenece al grupo 2"
            break
        case "Azul":
            resutl= "Pertenece al grupo 3"
            break
    }
    return resutl;
}
let colorUnifiom = groupsUniform ("Azul");
console.log(colorUnifiom);

const twoDice = (dado1, dado2) => {
    if (dado1 + dado2 === 3 || dado1 + dado2 === 7 || dado1 + dado2 === 11) {
        return "Congratulations, you won" 
    }   else if (dado1 + dado2 === 3 || dado1 + dado2 === 3){
        return "Try again"
    }   else if (dado1 + dado2 || dado1 + dado2 % 3 === 0) {
        return "Take another chance"
    }
}

let resultl = twoDice (4, 7);
console.log(resultl);

resultl = twoDice (3, 3);
console.log(resultl);

resultl = twoDice (5, 3)
console.log(resultl); 