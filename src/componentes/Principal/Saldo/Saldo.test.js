import { render, screen } from '@testing-library/react';
import Saldo from '.';

describe('Componente de Saldo', () => {
  test('Deve renderizar o Saldo com valor monetario', () => {
    render(<Saldo saldo={1000} />);
    const saldo = screen.getByTestId('saldo-conta');
    expect(saldo.textContent).toBe('R$ 1000');
  });
});
