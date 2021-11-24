import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoomsList = createAsyncThunk(
  "rooms/fetchRoomsList",
  async (thunkAPI) => {
    const res = await fetch("data/rooms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => data.json());
    return res;
  }
);

export const RoomsSlice = createSlice({
  name: "rooms",
  initialState: {
    roomsList: [],
    loading: false,
  },
  reducers: {
    setRooms: (state, action) => {
      state.roomsList = action.payload;
    },
  },
  extraReducers: {
    [fetchRoomsList.pending]: (state) => {
      state.loading = true;
    },
    [fetchRoomsList.fulfilled]: (state, { payload }) => {
      state.roomsList = payload;
      state.loading = false;
    },
    [fetchRoomsList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setRooms } = RoomsSlice.actions;

export const selector = (state) => state.rooms;

export default RoomsSlice.reducer;
