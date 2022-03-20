//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.

//Exemplo: calculateSalary(150, 40.5) // retornará "Salário igual a R$ 6075"

const calculateSalary = (hours, earnPerHour) => {
  return `O salário é igual a R$${hours*earnPerHour}`
}

module.exports = calculateSalary 