import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import toast from "react-hot-toast";
import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader";
import CamperList from "../../components/CamperList/CamperList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCampers())
      .unwrap()
      .then(() => {
        toast.success("Campers loaded successfully🎉");
      });
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <CamperList />
    </div>
  );
};

export default CatalogPage;
