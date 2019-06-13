import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GameOfLife from './game-of-life';
import 'jest-dom/extend-expect';

afterEach(cleanup);

it('shoud render 100 cells', () => {
  const { container } = render(<GameOfLife n={10} width={20} height={20} />);
  expect(container.querySelectorAll('div div div div').length).toBe(100);
});
it('shoud render cells positioned correctly', () => {
  const { container } = render(<GameOfLife n={10} width={20} height={20} />);
  const cell = container.querySelectorAll('div div div div')[27];
  expect(cell).toHaveClass('cell');
  expect(cell).toHaveStyle(`
    top: 40;
    left: 140;
    width: 20;
    height: 20;
  `);
});
