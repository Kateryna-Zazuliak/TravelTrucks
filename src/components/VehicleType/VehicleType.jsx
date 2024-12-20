import css from "./VehicleType.module.css";
import Icon from "../Icon/Icon";
import { types } from "../../services/services.js";

const VehicleType = ({ bodyType, setBodyType }) => {
  return (
    <div className={css.vehicleType}>
      <h3 className={css.title}>Vehicle type</h3>
      <Icon id="icon-divider" className={css.divider} width={360} height={2} />
      <div className={css.list}>
        {types.map((type) => (
          <label
            key={type}
            className={bodyType === type ? css.active : css.item}
          >
            <input
              type="radio"
              name="types"
              value={type}
              checked={bodyType === type}
              onChange={() => setBodyType(type)}
            />
            <Icon className={css.icon} id={type} width={32} height={32} />
            <span className={css.text}>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
export default VehicleType;
