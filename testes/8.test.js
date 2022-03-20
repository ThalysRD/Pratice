const multiply = require('../exercises/8')

describe('Testa os resultados da multiplicação', () => {
    it('Testa se, caso os parâmetros sejam 10 e 20, retorna 200', () => {
        expect(multiply(10,20)).toBe(200)
    })
    it('Testa se, caso os parâmetros sejam passados sejam 5 e 3, retorna 15', () => {
        expect(multiply(3,5)).toBe(15)
    })
})