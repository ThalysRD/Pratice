const biggerOrEqual = require('../exercises/5')

describe('Testa se o primeiro número é maior ou igual que o segundo', () => {
    it('Testa se 0 é igual a 0', () => {
        expect(biggerOrEqual(0,0)).toBe(true)
    })
    it('Testa se 0 não é igual a "0"', () => {
        expect(biggerOrEqual(0,"0")).toBe(false)
    })
    it('Testa se 5 é maior que 1', () => {
        expect(biggerOrEqual(5,1)).toBe(true)
    })
})