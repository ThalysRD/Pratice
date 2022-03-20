const calculateSalary = require('../exercises/3')

describe('Testa se, a função retorna o salário recebido no mês', () => {
    it('Testa se, a hora trabalhada for 150 e a hora ganha for 40.5, retorna  `O salário é igual a R$6075', () =>{
        expect(calculateSalary(150, 40.5)).toBe( "O salário é igual a R$6075")
    })
})