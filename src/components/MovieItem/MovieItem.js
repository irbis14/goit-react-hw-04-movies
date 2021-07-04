import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
// import PropTypes from "prop-types";
// import defaultImg from "./defaultImage.jpg";

const imgURL = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ movies, itemUrl }) => {
  return movies.map((movie) => {
    return (
      <li key={movie.id} className={styles.MovieItem}>
        <div className={styles.MovieItem__wraper}>
          <Link to={`${itemUrl}${movie.id}`}>
            <img
              src={`${imgURL}${movie.poster_path}`}
              alt={movie.title}
              className={styles.MovieItem__image}
            />
            <h3>{movie.title}</h3>
          </Link>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </li>
    );
  });
};

/* MovieItem.defaultProps = {
  src: defaultImg,
};

MovieItem.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
  onShowModal: PropTypes.func,
};
 */
export default MovieItem;
