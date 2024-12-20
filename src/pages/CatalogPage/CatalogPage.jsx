import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import toast from "react-hot-toast";
import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader";
import CamperList from "../../components/CamperList/CamperList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FilterForm from "../../components/FilterForm/FilterForm";
import { clearFilter } from "../../redux/filters/slice";
import {
  selectBodyType,
  selectFeatures,
  selectLocation,
} from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers) || [];

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useSelector(selectLocation);
  const bodyType = useSelector(selectBodyType);
  const features = useSelector(selectFeatures);
  const filters = {
    ...(location && { location }),
    ...(bodyType && { bodyType }),
    ...(features.length > 0 && { features: features.join(",") }),
  };

  useEffect(() => {
    dispatch(fetchCampers())
      .unwrap()
      .then(() => {
        toast.success("Campers loaded successfully🎉");
      })
      .catch((err) => {
        toast.error("Failed to load campers. Please try again later.");
        console.error(err);
      });
  }, [dispatch]);
  const handleFilterSubmit = () => {
    dispatch(clearFilter());

    dispatch(fetchCampers(filters))
      .unwrap()
      .then(() => {
        toast.success("Filtered campers loaded successfully🎉");
      })
      .catch((err) => {
        toast.error("Failed to load filtered campers. Please try again later.");
        console.error(err);
      });
  };
  return (
    <section className={css.catalog}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <FilterForm onFilterSubmit={handleFilterSubmit} />
      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        <p>No campers available.</p>
      )}
    </section>
  );
};

export default CatalogPage;
