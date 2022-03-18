const convertAge = require('../exercises/2')

describe('Testa se a função converte a idade', () => {
    it('Testa se, caso uma pessoa tenha 25 anos, retorne 9125 dias', () => {
        expect(convertAge(25)).toBe(9125)
    })
    it('Testa se, caso a uma pessoa tenha 70 anos, retorne 25550 dias', () => {
        expect(convertAge(70)).toBe(25550)
    })
})