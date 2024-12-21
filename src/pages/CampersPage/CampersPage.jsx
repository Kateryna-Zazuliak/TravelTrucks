import { useParams } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperById,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
import { fetchCamperDetails } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./CampersPage.module.css";
import Icon from "../../components/Icon/Icon";

const CampersPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => selectCamperById(state, id)) || {};
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { name, price, rating, location, description, gallery } = camper;

  const [visibleComponent, setVisibleComponent] = useState("features");
  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  return (
    <section className={css.cardDetails}>
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <div className={css.detailsFirst}>
          <h1 className={css.name}>{name}</h1>
          <div className={css.ratingWrapper}>
            <p className={css.rating}>
              <span className={css.star}>
                <Icon
                  id={
                    camper.reviews.length > 0
                      ? "icon-star-pressed"
                      : "icon-star"
                  }
                  className={css.iconStar}
                  width={16}
                  height={15}
                />
              </span>
              {rating} ({camper.reviews.length} Reviews)
            </p>
            <div className={css.location}>
              <Icon
                id="location"
                className={css.iconLocation}
                width={16}
                height={16}
              />
              <p>{location}</p>
            </div>
          </div>
          <p className={css.price}>&euro;{price.toFixed(2)}</p>
        </div>
        <CamperGallery gallery={gallery} />
        <p className={css.description}>{description}</p>
        <div className={css.detailsThird}>
          <button
            className={visibleComponent === "features" ? css.active : css.tab}
            onClick={() => setVisibleComponent("features")}
          >
            Features
          </button>
          <button
            className={visibleComponent === "reviews" ? css.active : css.tab}
            onClick={() => setVisibleComponent("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={css.detailsSecond}>
          {visibleComponent === "features" && (
            <CamperFeatures features={camper} />
          )}
          {visibleComponent === "reviews" && (
            <CamperReviews reviews={camper.reviews} />
          )}
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default CampersPage;
