const createArray = require('../exercises/9')

describe('Testa se, a função tem o retorno esperado', () => {
    it('Testa se, caso o primeiro parametro for 1 e o segundo for 30, retorne um array que contenha 30 vezes o número 1', () => {
        expect(createArray(1,30)).toEqual([
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1 
          ])
    })
    it('Testa se, caso o primeiro parametro for 5 e o segundo for 3, retorne um array que contenha 3 vezes o número 5', () => {
        expect(createArray(5,3)).toEqual([5,5,5])
    })
    it('Testa se, caso o primeiro parametro for oi e o segundo for 5, retorne um array que contenha 5 vezes a palavra "oi"', () => {
        expect(createArray('oi',5)).toEqual(['oi','oi','oi','oi','oi'])
    })
})