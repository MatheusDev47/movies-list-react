import P from 'prop-types';
import './style.css';

export const NavBar = ({ onClick, value }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <button className="button-menu-open" onClick={onClick}>
          {value}
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Popular Movies</a>
          </li>
          <li>
            <a href="#">More Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  onClick: P.func.isRequired,
  value: P.object.isRequired,
};
