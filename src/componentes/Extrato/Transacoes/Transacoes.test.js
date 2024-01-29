import { render, screen } from '@testing-library/react';
import Transacoes from '.';
import estilos from '../Extrato.module.css';

describe('Componente Transacoes', () => {
  test('Deve renderizar o componente com props atualizadas', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 200,
    };

    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transacao} />
    );
    const tipoTransacao = screen.getByTestId('tipoTransacao');
    const valorTransacao = screen.getByTestId('valorTransacao');

    expect(tipoTransacao).toHaveTextContent('Depósito');
    expect(valorTransacao).toHaveTextContent('R$ 200');

    const novaTransacao = {
      transacao: 'Transferência',
      valor: 100,
    };
    rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);
    const novoTipoTransacao = screen.getByTestId('tipoTransacao');
    const novoValorTransacao = screen.getByTestId('valorTransacao');

    expect(novoTipoTransacao).toHaveTextContent('Transferência');
    expect(novoValorTransacao).toHaveTextContent('- R$ 100');
  });
});
