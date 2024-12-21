import { useDispatch } from "react-redux";
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
import { useSelector } from "react-redux";

const FilterForm = () => {
  const features = useSelector(selectFeatures);
  const bodyType = useSelector(selectBodyType);
  const location = useSelector(selectLocation);
  console.log(features);

  const dispatch = useDispatch();

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleBodyTypeChange = (value) => {
    dispatch(setBodyType(value));
  };

  const handleFeatureChange = (checked, feature) => {
    dispatch(toggleFeature(feature));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", { location, bodyType, features });
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
