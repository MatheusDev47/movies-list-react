import { render, screen } from '@testing-library/react';

import { ParagraphMessage } from './';

describe('<ParagraphMessage />', () => {
  it('Should render message in screen', () => {
    render(<ParagraphMessage message="Message test" />);

    expect(screen.getByText(/message test/i)).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<ParagraphMessage message="Message test" />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
