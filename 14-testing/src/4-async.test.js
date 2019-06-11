import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import MyIp from './4-async';

beforeEach(fetch.resetMocks);
afterEach(cleanup);

it('shoud fetch your outbound IP address', async () => {
  fetch.mockResponseOnce(JSON.stringify({ ip: '1.2.3.4' }));
  const { container, getByText } = render(<MyIp />);
  expect(container.querySelector('div').textContent).toBe('');
  await wait();
  expect(getByText('1.2.3.4').textContent).toBe('1.2.3.4');
});
