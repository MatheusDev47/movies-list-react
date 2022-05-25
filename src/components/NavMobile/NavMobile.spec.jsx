import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavMobile } from '.';

describe('<NavMobile />', () => {
  it('Should navbar mobile is render correctly in the page', () => {
    const fn = jest.fn();

    render(<NavMobile onClick={fn} value="X" />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('Should onClick function in the button is working', () => {
    const fn = jest.fn();

    render(<NavMobile onClick={fn} value="X" />);

    const button = screen.getByRole('button', { name: /x/i });

    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<NavMobile onClick={fn} value="X" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
