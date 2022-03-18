// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará true

const biggerOrEqual = (num1, num2) => {
    if(typeof num1 !== typeof num2){
        return false
    }
    if( num1 >= num2){
       return true
    } else {
        return false
    } 
}

console.log(biggerOrEqual(5,10))

module.exports = biggerOrEqual