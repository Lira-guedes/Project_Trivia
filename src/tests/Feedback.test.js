import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste da página de Feedback', () => {
  it('Verificação do botão play again na tela de Feedback', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    act(() => { history.push('/feedback'); });

    const btnPlayAgain = screen.getByRole('button', {name: /play again/i});
    expect(btnPlayAgain).toBeInTheDocument();

    userEvent.click(btnPlayAgain);
    expect(history.location.pathname).toBe('/');
  })
  it('Verificação do botão ranking na tela de Feedback', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    act(() => { history.push('/feedback'); });

    const btnRanking = screen.getByRole('button', {name: /ranking/i});
    expect(btnRanking).toBeInTheDocument();

    userEvent.click(btnRanking);
    expect(history.location.pathname).toBe('/ranking');
  })
  it('Verificação dos componentes na tela de Feedback', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    act(() => { history.push('/feedback'); });
    expect(screen.getByTestId('feedback-text')).toBeInTheDocument();
    expect(screen.getByTestId('feedback-total-question')).toBeInTheDocument();
    expect(screen.getByTestId('feedback-total-score')).toBeInTheDocument();
    expect(screen.getByTestId('header-profile-picture')).toBeInTheDocument();
    expect(screen.getByTestId('header-player-name')).toBeInTheDocument();
    expect(screen.getByTestId('header-score')).toBeInTheDocument();
  })
})
