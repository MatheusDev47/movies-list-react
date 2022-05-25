import { render, screen } from '@testing-library/react';
import { CardFilms } from '.';
import { cardFilmsPropsMock } from './mock';

const props = cardFilmsPropsMock;

describe('<CardFilms />', () => {
  it('Should CardFilms is render correctly in the page', () => {
    render(<CardFilms {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img);
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.overview)).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<CardFilms {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
