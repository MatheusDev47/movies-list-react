import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputSearch } from '.';

describe('<InputSearch', () => {
  it('Should have a value in searchValue', () => {
    const fn = jest.fn();

    render(<InputSearch onChange={fn} value="Test Value" />);

    const input = screen.getByPlaceholderText(/search for movies/i);

    expect(input.value).toBe('Test Value');
  });

  it('Should call onChange function when key is press', () => {
    const fn = jest.fn();

    render(<InputSearch onChange={fn} value="test onChange function" />);

    const input = screen.getByPlaceholderText(/search for movies/i);
    const valueInputTest = 'value test';

    userEvent.type(input, valueInputTest);

    expect(input.value).toBe('test onChange function');
    expect(fn).toHaveBeenCalledTimes(valueInputTest.length);
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<InputSearch onChange={fn} value="" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
