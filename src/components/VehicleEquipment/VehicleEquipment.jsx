import { featuresConfig } from "../../services/services.js";
import Icon from "../Icon/Icon.jsx";
import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ features, handleFeatureChange }) => {
  const booleanFeatures = featuresConfig.filter(
    (feature) => feature.type === "boolean"
  );
  return (
    <div className={css.vehicle}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <Icon id="icon-divider" className={css.divider} width={360} height={2} />
      <div className={css.list}>
        {booleanFeatures.map(({ key, label, icon }) => (
          <label
            key={key}
            className={features.includes(key) ? css.active : css.item}
          >
            <input
              type="checkbox"
              name="equipment"
              value={key}
              checked={features.includes(key)}
              onChange={(e) => handleFeatureChange(e.target.checked, key)}
            />
            <Icon
              className={`${css.iconFeature} ${
                css[`icon-${label.toLowerCase()}`]
              }`}
              id={icon}
              width={32}
              height={32}
            />
            <span className={css.text}>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
