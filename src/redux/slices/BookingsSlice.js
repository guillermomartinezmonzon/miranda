import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBookingsList = createAsyncThunk(
  "bookings/fetchBookingsList",
  async (thunkAPI) => {
    const res = await fetch("data/bookings.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => data.json());
    return res;
  }
);

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookingsList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchBookingsList.pending]: (state) => {
      state.loading = true;
    },
    [fetchBookingsList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bookingsList = payload;
    },
    [fetchBookingsList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selector = (state) => state.bookings;

export default BookingsSlice.reducer;
