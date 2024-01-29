import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

test('Deve renderizar o componente sem erros', () => {
  render(<Cabecalho />);

  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});
