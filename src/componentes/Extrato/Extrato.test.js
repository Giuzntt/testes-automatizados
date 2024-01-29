import { render, screen } from '@testing-library/react';
import Extrato from '.';

describe('Deve renderizar o componente de Extrato', () => {
  test('', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 200,
      },
    ];

    render(<Extrato transacoes={transacoes} />);

    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });
});
