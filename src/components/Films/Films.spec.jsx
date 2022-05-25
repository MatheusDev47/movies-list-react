import { render, screen } from '@testing-library/react';

import { Films } from '.';

const props = {
  films: [
    {
      id: 1,
      title: 'title 01',
      overview: 'overview 01',
      poster_path: '/img/img01.png',
    },
    {
      id: 2,
      title: 'title 02',
      overview: 'overview 02',
      poster_path: '/img/img02.png',
    },
    {
      id: 3,
      title: 'title 03',
      overview: 'overview 03',
      poster_path: '/img/img03.png',
    },
    {
      id: 4,
      title: 'title 04',
      overview: 'overview 04',
      poster_path: '/img/img04.png',
    },
  ],
};

describe('<Films />', () => {
  it('Should render movies', () => {
    render(<Films {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(4);
    expect(screen.getAllByText(/overview/i)).toHaveLength(4);
    expect(screen.getByRole('img', { name: /title 01/i })).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/img/img01.png',
    );
  });

  it('Should not render movies when no movies exist', () => {
    render(<Films />);

    expect(screen.queryByRole('heading', { name: /title 02/i })).not.toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<Films {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
