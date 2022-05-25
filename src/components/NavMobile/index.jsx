import P from 'prop-types';
import './style.css';

export const NavMobile = ({ onClick, value }) => {
  return (
    <nav className="navbar-mobile">
      <div className="button">
        <button onClick={onClick} className="button-menu-close">
          {value}
        </button>
      </div>
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
    </nav>
  );
};

NavMobile.propTypes = {
  onClick: P.func.isRequired,
  value: P.object.isRequired,
};
