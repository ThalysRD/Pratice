const returnStr = require('../exercises/1')

describe('Testa se, a função tem o retorno esperado', () => {
    it('Testa se, a função retorna "Olá Maria" ', () => {
        expect(returnStr('Maria')).toBe("Olá Maria")
    }) 
    it('Testa se, a função retorna "Olá Leonardo', () => {
        expect(returnStr('Leonardo')).toBe("Olá Leonardo")
    })
})