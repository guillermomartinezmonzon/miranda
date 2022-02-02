import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAPI} from "../../api";

export const fetchBookingsList = createAsyncThunk(
    "bookings/fetchBookingList",
    async () => {
       return await getAPI('bookings')
          .then((data) => {return data});
    }
);

export const fetchBooking = createAsyncThunk(
    "bookings/fetchBooking",
    async ({element}, thunkAPI) => {
       console.log(element)
       return await getAPI(`bookings/${element}`)
          .then((data) => {
              console.log(data)
              return data
          });
    }
);


export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookingsList: [],
    loading: false,
    booking: {},
  },
  reducers: {},
  extraReducers: {

    [fetchBooking.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooking.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = payload;
    },
    [fetchBooking.rejected]: (state) => {
      state.loading = true;
    },

    [fetchBookingsList.pending]: (state) => {
      state.loading = true;
    },
    [fetchBookingsList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bookingsList = payload;
    },
    [fetchBookingsList.rejected]: (state) => {
      state.loading = true;
    },

  },
});



export const selector = (state) => state.bookings;

export default BookingsSlice.reducer;
