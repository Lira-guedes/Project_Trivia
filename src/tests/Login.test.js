import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Teste da página de Login', () => {
  it('Verificação dos componentes na tela de Login', async () => {
    const { history } = renderWithRouterAndRedux(<App />)

    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const btnPlay = screen.getByRole('button', {name: /Play/i});
    const btnSettings = screen.getByTestId('btn-settings');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(btnPlay).toBeInTheDocument();
    expect(btnSettings).toBeInTheDocument();
    expect(btnSettings).not.toBeDisabled();
    expect(btnPlay).toBeDisabled();

    act(() => userEvent.type(name, 'Roberto'));
    expect(btnPlay).toBeDisabled();
    act(() => userEvent.type(email, 'Roberto@test.com'));
    expect(btnPlay).toBeEnabled();
    expect(btnPlay).not.toBeDisabled();

    const mockFetch = {"response_code":0,"response_message":"Token Generated Successfully!","token":"19bb19bb1e8c6f99384111bf54da55deaed4fb1512372696cbf78b79960d6514"};
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockFetch)
    })
    
    userEvent.click(btnPlay);

    await waitFor(() => { expect(history.location.pathname).toBe('/game') });
  });

  it('Verificação do botão de configuração', () => {
    const {history} = renderWithRouterAndRedux(<App />)
    const btnSettings = screen.getByTestId('btn-settings');
    
    expect(btnSettings).toBeInTheDocument();
    userEvent.click(btnSettings);
    expect(history.location.pathname).toEqual('/settings');
  });
})