import PropTypes from "prop-types";
import styles from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <div className={styles.container}>
          <h3>Reviews</h3>
          <ul className={styles.list}>
            {reviews.map((review) => {
              return (
                <li key={review.id} className={styles.item}>
                  <h4 className={styles.name}>{review.author}</h4>
                  <p className={styles.date}>{review.created_at}</p>
                  <p className={styles.character}>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h3 className={styles.message}>Sorry, no reviews found</h3>
      )}
    </>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    created_at: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default ReviewList;
