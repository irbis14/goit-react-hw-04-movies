import { Link, withRouter } from "react-router-dom";
import styles from "./MovieDetails.module.css";

const imgURL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = ({
  posterPath,
  genres,
  originalTitle,
  overview,
  releaseDate,
  voteAverage,
  goBack,
  pageUrl,
}) => {
  return (
    <>
      <button type="button" onClick={goBack} className={styles.button}>
        Go back
      </button>
      <div className={styles.wrapper}>
        <img
          src={`${imgURL}${posterPath}`}
          alt={originalTitle}
          className={styles.image}
        ></img>
        <div className={styles.container}>
          <h2>{originalTitle}</h2>
          <p>{releaseDate}</p>
          <p>User Score: {voteAverage}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          {/* <h4>Genres</h4>
          <p>{genres}</p> */}
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

export default withRouter(MovieDetails);
