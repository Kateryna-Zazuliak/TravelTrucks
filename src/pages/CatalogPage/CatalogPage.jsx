import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
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
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [campersList, setCampersList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    dispatch(fetchCampers({ pageNumber, queryString }))
      .unwrap()
      .then((data) => {
        setCampersList((prev) => [...prev, ...data.items]);
      })
      .then(() => {
        toast.success("Campers loaded successfully🎉");
      })
      .catch((err) => {
        toast.error("Failed to load campers. Please try again later.");
        console.error(err);
      });
  }, [dispatch, pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };
  const handleFilterSubmit = (filters) => {
    setPageNumber(1);
    const queryParams = new URLSearchParams({
      ...(filters.location && { location: filters.location }),
      ...(filters.bodyType && { bodyType: filters.bodyType }),
    });
    if (filters.features) {
      filters.features.split(",").forEach((feature) => {
        queryParams.append("features", feature);
      });
    }
    const queryString = queryParams.toString();
    setQueryString(queryString);
  };

  return (
    <section className={css.catalog}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <FilterForm handleFilterSubmit={handleFilterSubmit} />
      <div className={css.catalogWrapper}>
        {campersList.length > 0 ? (
          <CamperList campers={campersList} />
        ) : (
          <p>No campers available.</p>
        )}
        {campersList.length > 0 && campers.total > campersList.length && (
          <Button
            name={"Load more"}
            className={css.loadMore}
            onClick={handleLoadMore}
          />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
