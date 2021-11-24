import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsersList = createAsyncThunk(
  "users/fetchUsersList",
  async (thunkAPI) => {
    const res = await fetch("data/users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => data.json());
    return res;
  }
);

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUsersList.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsersList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.usersList = payload;
    },
    [fetchUsersList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selector = (state) => state.users;

export default UsersSlice.reducer;
