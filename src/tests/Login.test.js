import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste da página de Login', () => {
  it('Verificação dos componentes na tela de Login', () => {
    const {store} = renderWithRouterAndRedux(<App />)

    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const btnPlay = screen.getByRole('button', {name: /Play/i});
    const btnSettings = screen.getByTestId('btn-settings');

    expect(btnSettings).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(btnPlay).toBeInTheDocument();
    expect(btnPlay).toBeDisabled();

    userEvent.type(name, 'Roberto');
    expect(btnPlay).toBeDisabled();
    userEvent.type(email, 'Roberto@test.com');
    expect(btnPlay).toBeEnabled();
    userEvent.click(btnPlay);

    const stateUser = store.getState().loginReducer.user;
    expect(stateUser).toBe('Roberto');

    const stateEmail = store.getState().loginReducer.email;
    expect(stateEmail).toBe('Roberto@test.com');
  });

  it('Verificação do botão de configuração', () => {
    const {history} = renderWithRouterAndRedux(<App />)
    const btnSettings = screen.getByTestId('btn-settings');
    
    expect(btnSettings).toBeInTheDocument();
    userEvent.click(btnSettings);
    expect(history.location.pathname).toEqual('/settings');
  });
})