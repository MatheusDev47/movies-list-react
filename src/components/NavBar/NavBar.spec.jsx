import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavBar } from '.';

describe('<NavBar />', () => {
  it('Should navbar is render correctly in the page', () => {
    const fn = jest.fn();

    render(<NavBar onClick={fn} value="=" />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('Should onClick function in the button is working', () => {
    const fn = jest.fn();

    render(<NavBar onClick={fn} value="=" />);

    const button = screen.getByRole('button', { name: /=/i });

    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<NavBar onClick={fn} value="=" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
