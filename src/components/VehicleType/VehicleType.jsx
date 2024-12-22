import css from "./VehicleType.module.css";
import Icon from "../Icon/Icon";
import { featuresConfig } from "../../services/services.js";
import { setBodyType } from "../../redux/filters/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectBodyType } from "../../redux/filters/selectors.js";

const VehicleType = () => {
  const bodyType = useSelector(selectBodyType);
  const dispatch = useDispatch();
  const formConfig = featuresConfig.find((feature) => feature.key === "form");
  return (
    <div className={css.vehicleType}>
      <h3 className={css.title}>Vehicle type</h3>
      <Icon id="icon-divider" className={css.divider} width={360} height={2} />
      <div className={css.list}>
        {Object.entries(formConfig.iconAndLabelMap).map(
          ([key, { icon, label }]) => (
            <label
              key={key}
              className={bodyType === key ? css.active : css.item}
            >
              <input
                type="radio"
                name="types"
                value={key}
                checked={bodyType === key}
                onChange={() => {
                  dispatch(setBodyType(key));
                }}
              />
              <Icon className={css.icon} id={icon} width={32} height={32} />
              <span className={css.text}>{label}</span>
            </label>
          )
        )}
      </div>
    </div>
  );
};
export default VehicleType;
