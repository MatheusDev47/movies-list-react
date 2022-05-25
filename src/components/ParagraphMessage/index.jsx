import P from 'prop-types';
import './style.css';

export const ParagraphMessage = ({ message }) => {
  return <p className="p">{message}</p>;
};

ParagraphMessage.propTypes = {
  message: P.string.isRequired,
};
