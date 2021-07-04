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
        <h2>No reviews found</h2>
      )}
    </>
  );
};

export default ReviewList;
