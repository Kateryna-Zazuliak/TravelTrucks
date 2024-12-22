import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  location: "",
  bodyType: "",
  features: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter((item) => item !== feature);
      } else {
        state.features.push(feature);
      }
    },
    clearFilter: () => INITIAL_STATE,
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setLocation, setBodyType, toggleFeature, clearFilter } =
  filtersSlice.actions;
