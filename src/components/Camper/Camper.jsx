import css from "./Camper.module.css";
import { equipment } from "../../services/services.js";
import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";

const Camper = ({ camper }) => {
  const { name, price, rating, location, description, gallery } = camper;
  const activeFeatures = equipment.filter(
    (feature) => camper[feature.toLowerCase() === true]
  );

  return (
    <div className={css.card}>
      {/* <div className={css.imageWrapper}> */}
      {/* </div> */}
      <img src={gallery[0].thumb} alt={name} className={css.image} />
      <div className={css.info}>
        <h2 className={css.name}>{name}</h2>
        <p className={css.price}>&euro;{price.toFixed(2)}</p>
        <p className={css.rating}>
          <span className={css.star}>
            <Icon id="icon-star-pressed" className={css.iconStar} />
          </span>
          {rating} ({camper.reviews.lenght > 0} Reviews)
        </p>
        <p className={css.location}>
          {" "}
          <Icon id="location" className={css.iconLocation} />
          {location}
        </p>
        <p className={css.description}>{description}</p>
        <div className={css.features}>
          {activeFeatures.map((feature, index) => (
            <span key={index} className={css.feature}>
              <Icon id={feature} className={css.iconFeature} /> {feature}
            </span>
          ))}
        </div>
        <Button name="Show more" />
      </div>
    </div>
  );
};

export default Camper;
