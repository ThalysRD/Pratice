//Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 

const verifyNumber = (num,numMax,numMin) => {
   if(num > numMin && num < numMax){
        return true
    } else {
        return false
    }
    
}

module.exports = verifyNumber