import { useDispatch, useSelector } from "react-redux";
import {
  selectBodyType,
  selectFeatures,
  selectLocation,
} from "../../redux/filters/selectors";
import {
  setBodyType,
  setLocation,
  toggleFeature,
} from "../../redux/filters/slice";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import css from "./FilterForm.module.css";

const FilterForm = ({ onFilterSubmit }) => {
  const dispatch = useDispatch();
  const features = useSelector(selectFeatures);
  const location = useSelector(selectLocation);
  const bodyType = useSelector(selectBodyType);

  const handleToggleFeature = (feature) => {
    dispatch(toggleFeature(feature));
  };
  const handleSetLocation = (location) => {
    dispatch(setLocation(location));
  };
  const handleSetBodyType = (bodyType) => {
    dispatch(setBodyType(bodyType));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.location}>
        <span className={css.textLocation}>Location</span>
        <label key="location">
          <input
            className={css.inputLocation}
            type="text"
            placeholder="City"
            name="location"
            value={location}
            onChange={(e) => handleSetLocation(e.target.value)}
          />
          <Icon
            className={css.iconLocation}
            id="location"
            width={20}
            height={20}
          />
        </label>
      </div>
      <p className={css.textFilters}>Filters</p>
      <VehicleEquipment
        features={features}
        toggleFeature={handleToggleFeature}
      />
      <VehicleType bodyType={bodyType} setBodyType={handleSetBodyType} />
      <Button name="Search" type="submit" />
    </form>
  );
};

export default FilterForm;
