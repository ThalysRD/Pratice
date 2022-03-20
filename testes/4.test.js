const monthCorrespondent = require('../exercises/4')

describe('Testa se, a função retorna o mês correspondente', () => {
    it('Se o parametro passado for 1 retorna "Janeiro"', () => 
    expect(monthCorrespondent(1)).toBe('Janeiro'))
    it('Se o parametro passado for 2 retorna "Fevereiro"', () => 
    expect(monthCorrespondent(2)).toBe('Fevereiro'))
    it('Se o parametro passado for 3 retorna "Março"', () => 
    expect(monthCorrespondent(3)).toBe('Março'))
    it('Se o parametro passado for 4 retorna "Abril"', () => 
    expect(monthCorrespondent(4)).toBe('Abril'))
    it('Se o parametro passado for 5 retorna "Maio"', () => 
    expect(monthCorrespondent(5)).toBe('Maio'))
    it('Se o parametro passado for 6 retorna "Junho"', () => 
    expect(monthCorrespondent(6)).toBe('Junho'))
    it('Se o parametro passado for 7 retorna "Julho"', () => 
    expect(monthCorrespondent(7)).toBe('Julho'))
    it('Se o parametro passado for 8 retorna "Agosto"', () => 
    expect(monthCorrespondent(8)).toBe('Agosto'))
    it('Se o parametro passado for 9 retorna "Setembro"', () => 
    expect(monthCorrespondent(9)).toBe('Setembro'))
    it('Se o parametro passado for 10 retorna "Outubro"', () => 
    expect(monthCorrespondent(10)).toBe('Outubro'))
    it('Se o parametro passado for 11 retorna "Novembro"', () => 
    expect(monthCorrespondent(11)).toBe('Novembro'))
    it('Se o parametro passado for 12 retorna "Dezembro"', () => 
    expect(monthCorrespondent(12)).toBe('Dezembro'))
})

describe('Testa se, foi passado um mês existente', () => {
    it('Se for Passado um número que não corresponde a algum mês do calendário retorne "Esse mês não existe"', () => 
    expect(monthCorrespondent(13)).toBe('Esse mês não existe'))
    it('Se for Passado um número que não corresponde a algum mês do calendário retorne "Esse mês não existe"', () => 
    expect(monthCorrespondent(0)).toBe('Esse mês não existe'))
    it('Se for Passado um número que não corresponde a algum mês do calendário retorne "Esse mês não existe"', () => 
    expect(monthCorrespondent(13)).toBe('Esse mês não existe'))
   })

   describe('Testa se, foi passado algum parâmetro', () => {
    it('Se for Passado um número que não corresponde a algum mês do calendário retorne "Você precisa inserir um número"', () => 
    expect(monthCorrespondent()).toBe('Você precisa inserir um número'))
   })
