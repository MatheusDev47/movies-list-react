import P from 'prop-types';
import './style.css';

export const InputSearch = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} type="search" placeholder="Search for movies" />;
};

InputSearch.propTypes = {
  onChange: P.func.isRequired,
  value: P.string.isRequired,
};
