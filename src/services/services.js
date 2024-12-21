export const featuresConfig = [
  { key: "length", label: "Length", type: "text" },
  { key: "width", label: "Width", type: "text" },
  { key: "height", label: "Height", type: "text" },
  { key: "tank", label: "Tank", type: "text" },
  { key: "consumption", label: "Consumption", type: "text" },
  { key: "AC", label: "AC", type: "boolean", icon: "ac" },
  { key: "bathroom", label: "Bathroom", type: "boolean", icon: "bathroom" },
  { key: "kitchen", label: "Kitchen", type: "boolean", icon: "kitchen" },
  { key: "TV", label: "TV", type: "boolean", icon: "tv" },
  { key: "radio", label: "Radio", type: "boolean", icon: "radio" },
  {
    key: "refrigerator",
    label: "Refrigerator",
    type: "boolean",
    icon: "refrigerator",
  },
  { key: "microwave", label: "Microwave", type: "boolean", icon: "microwave" },
  { key: "gas", label: "Gas", type: "boolean", icon: "gas" },
  { key: "water", label: "Water", type: "boolean", icon: "water" },
  {
    key: "transmission",
    type: "variant",
    iconAndLabelMap: {
      automatic: { icon: "ac", label: "AC" },
      manual: { icon: "ac", label: "Manual" },
    },
  },
  {
    key: "engine",
    type: "variant",
    iconAndLabelMap: {
      diesel: { icon: "engine", label: "Diesel" },
      petrol: { icon: "engine", label: "Petrol" },
      hybrid: { icon: "engine", label: "Hybrid" },
    },
  },
  {
    key: "form",
    type: "variant",
    iconAndLabelMap: {
      fullyIntegrated: {
        icon: "Fully Integrated",
        label: "Fully Integrated",
      },
      panelTruck: { icon: "Van", label: "Van" },
      alcove: { icon: "Alcove", label: "Alcove" },
    },
  },
];
export const getTextFeatures = (camper) =>
  featuresConfig.filter(
    (feature) => feature.type === "text" && camper[feature.key]
  );

export const getBooleanFeatures = (camper) =>
  featuresConfig.filter(
    (feature) => feature.type === "boolean" && camper[feature.key]
  );

export const getVariantFeatures = (camper) =>
  featuresConfig.filter(
    (feature) =>
      feature.type === "variant" &&
      camper[feature.key] &&
      feature.iconAndLabelMap[camper[feature.key]]
  );
