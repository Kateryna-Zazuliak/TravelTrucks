import { useDispatch } from "react-redux";
import {
  selectBodyType,
  selectFeatures,
  selectLocation,
} from "../../redux/filters/selectors";
import {
  clearFilter,
  setBodyType,
  setLocation,
  toggleFeature,
} from "../../redux/filters/slice";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import css from "./FilterForm.module.css";
import { useSelector } from "react-redux";
import { createFilterObject } from "../../services/services";

const FilterForm = ({ handleFilterSubmit }) => {
  const dispatch = useDispatch();
  const features = useSelector(selectFeatures);
  const bodyType = useSelector(selectBodyType);
  const location = useSelector(selectLocation);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleBodyTypeChange = (value) => {
    dispatch(setBodyType(value));
  };

  const handleFeatureChange = (checked, feature) => {
    dispatch(toggleFeature(feature));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilter());
    const filters = createFilterObject({
      location,
      bodyType,
      features,
    });
    handleFilterSubmit(filters);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={css.location}>
        <span className={css.textLocation}>Location</span>
        <label key="location">
          <input
            className={css.inputLocation}
            type="text"
            placeholder="City"
            name="location"
            value={location}
            onChange={handleLocationChange}
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
      <VehicleEquipment features={features} onChange={handleFeatureChange} />
      <VehicleType bodyType={bodyType} onChange={handleBodyTypeChange} />
      <Button name="Search" type="submit" />
    </form>
  );
};

export default FilterForm;
