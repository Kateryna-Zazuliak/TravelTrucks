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
import Button from "../../components/Button/Button.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers) || [];
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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

  return (
    <section className={css.catalog}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <FilterForm />
      <div className={css.catalogWrapper}>
        {campers.length > 0 ? (
          <CamperList campers={campers} />
        ) : (
          <p>No campers available.</p>
        )}
        <Button name={"Load more"} className={css.loadMore} />
      </div>
    </section>
  );
};

export default CatalogPage;
