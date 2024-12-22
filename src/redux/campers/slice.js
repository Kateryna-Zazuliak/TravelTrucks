import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./operations.js";
const INITIAL_STATE = {
  items: [],
  selected: [],
  total: 0,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    addSelectedCamper: (state, action) => {
      if (!state.selected.find((camper) => camper.id === action.payload.id)) {
        state.selected.push(action.payload);
      }
    },
    removeSelectedCamper: (state, action) => {
      state.selected = state.selected.filter(
        (camper) => camper.id !== action.payload
      );
    },
    clearSelected: (state) => {
      state.selected = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperDetails.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.items.findIndex(
          (camper) => camper.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
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
export const { addSelectedCamper, removeSelectedCamper, clearSelected } =
  campersSlice.actions;
