import P from 'prop-types';
import './style.css';

export const ButtonPage = ({ onClick, disabled = false }) => {
  return (
    <button className="btn-next" onClick={onClick} disabled={disabled}>
      Load more films
    </button>
  );
};

ButtonPage.propTypes = {
  onClick: P.func.isRequired,
  disabled: P.bool,
};
