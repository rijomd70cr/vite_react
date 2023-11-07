/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render hello world', () => {
    render(<App />);
    screen.debug();
  });
});
