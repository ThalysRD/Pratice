const reverse = require('../exercises/6')

describe('Testa se, a função recebe um valor booleano e retorna o contrário do parâmetro passado', () => {
    it('Testa se, o valor passado for true, retorna false', () => {
        expect(reverse(true)).toBe(false)
    })
    it('Testa se, o valor passado for false, retorna true', () => {
        expect(reverse(false)).toBe(true)
    })
})

describe('Testa se, a função recebe um valor numérico e retorna o contrário do parâmetro passado', () => {
    it('Testa se, o valor passado for 1, retorna -1', () => {
        expect(reverse(1)).toBe(-1)
    })
    it('Testa se, o valor passado for 2000, retorna -2000', () => {
        expect(reverse(2000)).toBe(-2000)
    })
})

describe('Testa se, caso a função passada é número ou boolean', () => {
    it('Testa se, caso o parâmetro passado seja uma string, a função retorna a mensagem "O valor passado é um(a) string"', () => {
        expect(reverse('1')).toBe('O valor passado é um(a) string')
    })
    
})