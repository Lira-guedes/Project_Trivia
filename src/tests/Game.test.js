import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste da página de Jogo', () => {  
  it('Verificação dos componentes na tela de Jogo', async () => {
    const { history } = renderWithRouterAndRedux(<App />)
    act(() => { history.push('/game'); });
    expect(screen.getByTestId('header-profile-picture')).toBeInTheDocument();
    expect(screen.getByTestId('header-player-name')).toBeInTheDocument();
    expect(screen.getByTestId('header-score')).toBeInTheDocument();
    expect(screen.getByTestId('question-category')).toBeInTheDocument();
    expect(screen.getByTestId('question-text')).toBeInTheDocument();
    expect(screen.getByTestId('answer-options')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /answer/i})).toBeInTheDocument();

    act(() => {
        userEvent.click(('button', {name: /answer/i}));
    });
    expect(screen.getByRole('button', {name: /next/i})).toBeInTheDocument();
  })
})
