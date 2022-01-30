import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI } from "../../api";

export const fetchRoomsList = createAsyncThunk(
    "rooms/fetchRoomsList",
    async () => {
       return await getAPI('rooms')
          .then((data) => {return data});
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
