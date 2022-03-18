//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

//OBS: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos desde o último aniversário.

//EXEMPLOS: 
// converterIdadeEmAnosParaDias(25) // retornará 9125
// converterIdadeEmAnosParaDias(70) // retornará 25550

const convertAge = (age) => {
    const year = 365
    return age*year
}
console.log(convertAge(25))
module.exports = convertAge