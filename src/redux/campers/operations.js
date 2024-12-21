import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      //   const queryString = new URLSearchParams({
      //     location: filters.location || "",
      //     bodyType: filters.bodyType || "",
      //     features: filters.features ? filters.features.join(",") : "",
      //   }).toString();
      //   console.log(`Query String: ${queryString}`);
      //   const { data } = await instance.get(`/campers?${queryString}`);
      const { data } = await instance.get(`/campers`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchCamper",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
