import '@testing-library/jest-dom';
import { render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../src/components/Topbar/Topbar';
import Footer from '../src/components/Footer/Footer';

describe('Rota /', () => {
  test('Verifica se o logotipo é renderizado corretamente no header da aplicação', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Topbar />
      </BrowserRouter>
    );

    const text = getByText('{} macode');
    expect(text).toBeInTheDocument();
  });

  test('Verifica se o logotipo é renderizado corretamente no footer da aplicação', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const text = getByRole('heading', { level: 3 });
    expect(text.innerHTML).toEqual('{ macode }');
  });
});