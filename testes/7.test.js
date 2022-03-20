const verifyNumber = require('../exercises/7')

describe('Testa se, o primeiro parametro está entre o menor e o maior número', () => {
    it('Testa se, caso o número for 10 e estiver entre 100 e 50 ele retornará false', () => {
        expect(verifyNumber(10,100,50)).toBe(false)
    })
    it('Testa se, caso o número for 50 e estiver entre 833 e 21 ele retornará true', () => {
        expect(verifyNumber(50, 833, 21)).toBe(true)
    })
})