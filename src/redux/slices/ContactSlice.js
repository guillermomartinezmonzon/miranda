import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAPI} from "../../api";

export const fetchContactList = createAsyncThunk(
    "contact/fetchContactList",
    async () => {
       return await getAPI('contact')
          .then((data) => {return data});
    }
);

// export const fetchContactList = createAsyncThunk(
//   "contact/fetchContactList",
//   async (thunkAPI) => {
//     const res = await fetch("data/contact.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }).then((data) => data.json());
//     return res;
//   }
// );

export const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    contactList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchContactList.pending]: (state) => {
      state.loading = true;
    },
    [fetchContactList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.contactList = payload;
    },
    [fetchContactList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selector = (state) => state.contact;

export default ContactSlice.reducer;
