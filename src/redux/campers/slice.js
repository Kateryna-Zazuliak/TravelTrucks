import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./operations.js";
const INITIAL_STATE = {
  items: [],
  selected: null,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedCamper: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperDetails.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          (camper) => camper.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.selected = null;
      });
  },
});

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const campersReducer = campersSlice.reducer;
export const { setSelectedCamper } = campersSlice.actions;
