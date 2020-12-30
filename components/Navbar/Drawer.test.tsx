import { render, fireEvent } from 'test/testUtils';
import Component from './Navbar';

describe('<Drawer />', () => {
  it('open sidebar', () => {
    const { getByLabelText, getAllByText, queryByText, getAllByRole } = render(
      <Component />
    );
    const menu = getByLabelText('menu');

    expect(queryByText('Contact')).toBeFalsy;

    fireEvent.click(menu);

    expect(getAllByText('Newsletter').length).toBeTruthy;
    expect(queryByText('Contact')).toBeTruthy;

    // close
    const backdrop = getAllByRole('presentation');
    fireEvent.click(backdrop[0]);

    expect(getAllByText('Newsletter').length).toBeFalsy;
    expect(queryByText('Contact')).toBeFalsy;
  });
});
