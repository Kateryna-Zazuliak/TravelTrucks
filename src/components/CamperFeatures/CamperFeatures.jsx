import { featuresConfig } from "../../services/services";
import Icon from "../Icon/Icon.jsx";
import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ features }) => {
  const textFeatures = featuresConfig.filter(
    (feature) => feature.type === "text" && features[feature.key]
  );

  const booleanFeatures = featuresConfig.filter(
    (feature) => feature.type === "boolean" && features[feature.key]
  );

  const variantFeatures = featuresConfig.filter(
    (feature) => feature.type === "variant" && features[feature.key]
  );

  return (
    <div className={css.featuresBlock}>
      <div className={css.features}>
        {booleanFeatures.map(({ key, label, icon }) => (
          <span key={key} className={css.feature}>
            <Icon
              id={icon}
              className={`${css.iconFeature} ${
                css[`icon-${label.toLowerCase()}`]
              }`}
              width={20}
              height={20}
            />
            {label}
          </span>
        ))}
        {variantFeatures.map(({ key, iconAndLabelMap }) => {
          const { icon, label } = iconAndLabelMap[features[key]] || {};
          if (!icon || !label) return;
          return (
            <span key={key} className={css.feature}>
              <Icon
                id={icon}
                className={css.iconFeature}
                width={20}
                height={20}
              />
              {label}
            </span>
          );
        })}
      </div>
      <h2 className={css.title}>Vehicle details</h2>
      <Icon id="icon-divider" className={css.divider} width={527} height={2} />
      <ul className={css.textFeatures}>
        {textFeatures.map(({ key, label }) => (
          <li key={key} className={css.detailsItem}>
            <p className={css.details}>{label}</p>
            <p className={css.details}>{features[key]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperFeatures;
