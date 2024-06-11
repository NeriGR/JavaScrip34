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