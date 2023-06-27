import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste da página de Feedback', () => {
  it('Verificação dos componentes na tela de Feedback', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const btnPlayAgain = screen.getByRole('button', {name: /play again/i});
    const btnRanking = screen.getByRole('button', {name: /ranking/i});

    expect(btnPlayAgain).toBeInTheDocument();
    expect(btnRanking).toBeInTheDocument();

    userEvent.click(btnPlayAgain);
    expect(history.location.pathname).toBe('/');
    userEvent.click(btnRanking);
    expect(history.location.pathname).toBe('/ranking');
  })
})
