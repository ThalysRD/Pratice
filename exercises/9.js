//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const createArray = (arr, repetition) => {
    const array = []
    for(let i = 0; i < repetition; i+=1){
        array.push(arr)
    }
    return array
}

module.exports = createArray