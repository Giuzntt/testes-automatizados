import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Componente de formulario', () => {
  test('Deve renderizar um campo de input', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });
  test('Deve renderizar um campo de input com type Number', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Deve renderizar um campo de input preenchido', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '10');

    expect(campoTexto).toHaveValue(10);
  });
});

test('Deve chamar um evento de onSubmitquando realizr uma nova transação', () => {
  const realizarTransacao = jest.fn();
  render(<Formulario realizarTransacao={realizarTransacao} />);

  const botaoTransacao = screen.getByRole('button');
  userEvent.click(botaoTransacao);

  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
