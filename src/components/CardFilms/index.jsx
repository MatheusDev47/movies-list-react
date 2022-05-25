import P from 'prop-types';
import './style.css';

export const CardFilms = ({ img, title, overview }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="film-content">
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

CardFilms.propTypes = {
  img: P.string.isRequired,
  title: P.string.isRequired,
  overview: P.string.isRequired,
};
