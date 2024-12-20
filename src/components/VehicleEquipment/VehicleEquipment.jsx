import { equipment } from "../../services/services.js";
import Icon from "../Icon/Icon.jsx";
import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ features, toggleFeature }) => {
  return (
    <div className={css.vehicle}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <Icon id="icon-divider" className={css.divider} width={360} height={2} />
      <div className={css.list}>
        {equipment.map((feature) => (
          <label
            key={feature}
            className={features.includes(feature) ? css.active : css.item}
          >
            <input
              type="checkbox"
              name="equipment"
              value={feature}
              checked={features.includes(feature)}
              onChange={() => toggleFeature(feature)}
            />
            <Icon className={css.icon} id={feature} width={32} height={32} />
            <span className={css.text}>{feature}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
