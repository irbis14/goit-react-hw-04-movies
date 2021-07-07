import styles from "./Buttons.module.css";
import PropTypes from "prop-types";

const ButtonMore = ({ fetchMovieByName }) => {
  return (
    <div className={styles.button__container}>
      <button
        className={styles.button}
        type="button"
        onClick={fetchMovieByName}
      >
        Load more
      </button>
    </div>
  );
};

ButtonMore.propTypes = {
  fetchMovieByName: PropTypes.func.isRequired,
};

export default ButtonMore;
