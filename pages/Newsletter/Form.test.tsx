import React from 'react';
import { render, fireEvent, waitFor } from '../../test/testUtils';
import Component from './Form';

describe('Newsletter', () => {
  it('submit email', async () => {
    const { getByText, getByLabelText } = render(<Component />);
    const input = getByLabelText('subscribe-email') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'rafael@gmail.com' } });
    expect(input.value).toBe('rafael@gmail.com');
    await waitFor(() => fireEvent.click(getByText('Subscribe')));
    await waitFor(() => expect(input.value).toBe(''));
  });

  it('submit nothing', async () => {
    const { getByText } = render(<Component />);
    await waitFor(() => fireEvent.click(getByText('Subscribe')));
    await waitFor(() => expect(getByText(/Required field/)).toBeTruthy);
  });

  it('not valid email', async () => {
    const { getByText, getByLabelText } = render(<Component />);
    const input = getByLabelText('subscribe-email') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'asdf' } });
    await waitFor(() => fireEvent.click(getByText('Subscribe')));
    await waitFor(() => expect(getByText(/must be a valid email/)).toBeTruthy);
  });
});
