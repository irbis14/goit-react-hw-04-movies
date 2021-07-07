import PropTypes from "prop-types";
import styles from "./Buttons.module.css";

const ButtonGoBack = ({ goBack }) => {
  return (
    <button type="button" onClick={goBack} className={styles.button}>
      Go back
    </button>
  );
};

ButtonGoBack.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default ButtonGoBack;
