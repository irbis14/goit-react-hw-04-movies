import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import styles from "./MovieDetails.module.css";
import defaultImg from "../MovieItem/default-movie-img.jpg";

const imgURL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = ({
  posterPath,
  genresList,
  title,
  overview,
  releaseDate,
  voteAverage,
  goBack,
  pageUrl,
}) => {
  return (
    <>
      <ButtonGoBack goBack={goBack} />
      <div className={styles.wrapper}>
        <img
          src={`${imgURL}${posterPath}`}
          alt={title}
          className={styles.image}
        ></img>
        <div className={styles.container}>
          <h2>{title}</h2>
          <p>{releaseDate}</p>
          <p>User Score: {voteAverage}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresList}</p>
        </div>
      </div>
      <div className={styles.wrapper__additional}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`${pageUrl}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${pageUrl}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieDetails.defaultProps = {
  src: defaultImg,
};

MovieDetails.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
  pageUrl: PropTypes.string,
};

export default withRouter(MovieDetails);
