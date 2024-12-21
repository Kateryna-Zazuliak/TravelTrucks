import css from "./CamperReviews.module.css";

const CamperReviews = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review, index) => {
        const { reviewer_name, reviewer_rating, comment } = review;
        const defaultImg = reviewer_name
          ? reviewer_name.charAt(0).toUpperCase()
          : "?";
        const stars = Array(5)
          .fill(0)
          .map((_, index) => (index < reviewer_rating ? "filled" : "empty"));
        return (
          <li key={index} className={css.item}>
            <div className={css.firstPart}>
              <div className={css.avatar}>
                <span>{defaultImg}</span>
              </div>
              <div className={css.secondPart}>
                <p className={css.name}>{reviewer_name}</p>
                <div className={css.starRating}>
                  {stars.map((type, index) => (
                    <span
                      key={index}
                      className={type === "filled" ? css.filled : css.star}
                    >
                      {" "}
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperReviews;
