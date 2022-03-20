//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

const multiply = (num1, num2) => {
  if (num1 >= 0 && num2 >= 0) {
      let count = 0
    for(let i =0; i < num2; i+=1){
        count+=num1
    }  return count
  }
 
};

module.exports = multiply