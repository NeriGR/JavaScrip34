let phrase =  "Si creer no puedes, es por eso que fallas.";
let replacedPhrase = phrase.replace(/es/g, "xx");
console.log(replacedPhrase);



let phrase1 = "Hola hoders"

const reverse = (fullPhrase) => {
    let splittedPhrase = fullPhrase.split("");
  
    for (let i = 0; i < splittedPhrase.length; i++){
        let separetedPhrase = phrase1.split(" ")
        let reversed = separetedPhrase.reverse()
        let finalReverse = reverse.join(" ")
    }
    return finalReverse;
    console.log(reversedPhrase)
}
