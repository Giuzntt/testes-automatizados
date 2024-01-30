import { calculaNovoSaldo } from '.';

describe('Quando eu realizo uma transação', () => {
  test('Que é um deposito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 150);
    expect(novoSaldo).toBe(200);
  });

  test('Que é um transferencia, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 150);
    expect(novoSaldo).toBe(100);
  });
});

test('Deve retornar o valor do Saldo atualizado com o rendimento', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;
  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toHaveBeenCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
