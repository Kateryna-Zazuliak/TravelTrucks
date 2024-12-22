export const selectCampers = (state) => state.campers;
export const selectSelectedCamper = (state) => state.campers.selected;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectCamperById = (state, id) => {
  return state.campers.items.items.find((camper) => camper.id === id);
};
