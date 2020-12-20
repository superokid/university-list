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
});
