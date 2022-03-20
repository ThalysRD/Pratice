//Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".


const reverse = (param) => {
        if(typeof param !== 'boolean' && typeof param !== 'number'){
            return `O valor passado é um(a) ${typeof param}`
        }
    
        if(typeof param === 'boolean' && param === true) {
            return false
        } else if(typeof param === 'boolean' && param === false){
            return true
        }

        if(typeof param === 'number' && param > 0){
            return param * -1
        } else if(typeof param === 'number' && param < 0){
            return param * -1
        }
    
}


module.exports = reverse