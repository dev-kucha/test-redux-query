import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

export const fetchCats = createAsyncThunk(
  "https://catfact.ninja/fact",
  async (name) => {
    const response = await fetchData("https://catfact.ninja/fact");
    console.log(response);
    return response.data;
  }
);

const catsSlice = createSlice({
  name: "catSlice",
  initialState: {
    value: 0,
    catsData: { fact: "" },
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.catsData = action.payload;
    });
  },
});

export const { increment } = catsSlice.actions;
export default catsSlice.reducer;
