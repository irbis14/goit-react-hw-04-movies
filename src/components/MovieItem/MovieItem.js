import { Link, withRouter } from "react-router-dom";
import styles from "./MovieItem.module.css";
import PropTypes from "prop-types";
import defaultImg from "./default-movie-img.jpg";

const imgURL = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ movies, itemUrl, location }) => {
  return movies.map((movie) => {
    return (
      <li key={movie.id} className={styles.MovieItem}>
        <div className={styles.MovieItem__wraper}>
          <Link
            className={styles.MovieItem__link}
            to={{
              pathname: `${itemUrl}${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              src={`${imgURL}${movie.poster_path}`}
              alt={movie.title}
              className={styles.MovieItem__image}
            />
            <h3 className={styles.MovieItem__title}>{movie.title}</h3>
          </Link>
          <p>User score: {movie.vote_average}</p>
        </div>
      </li>
    );
  });
};

MovieItem.defaultProps = {
  src: defaultImg,
};

MovieItem.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  itemUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default withRouter(MovieItem);
