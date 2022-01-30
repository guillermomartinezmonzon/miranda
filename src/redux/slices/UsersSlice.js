import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAPI} from "../../api";

export const fetchUsersList = createAsyncThunk(
    "rooms/fetchUsersList",
    async () => {
       return await getAPI('users')
          .then((data) => {return data});
    }
);

// export const fetchUsersList = createAsyncThunk(
//   "users/fetchUsersList",
//   async (thunkAPI) => {
//     const res = await fetch("data/users.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }).then((data) => data.json());
//     return res;
//   }
// );

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
