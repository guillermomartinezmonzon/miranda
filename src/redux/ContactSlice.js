import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContact } from "../utils/getData";

const example = [
  {
    id: 1,
    date: "3/3/2021",
    customer: "Tony Bolwell",
    comment:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    status: "pending",
  },
  {
    id: 2,
    date: "6/10/2021",
    customer: "Adina Ricson",
    comment:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    status: "archive",
  },
  {
    id: 3,
    date: "8/16/2021",
    customer: "Pammi Nesbeth",
    comment:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    status: "archive",
  },
];

// const getContactList = createAsyncThunk(
//   'contact/getContactList',
//   async (thunkAPI) => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
//     (data) => data.json()
//   )
//   return res
// })

// export function getContact() {
//   return fetch("data/contact.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .catch((e) => console.log(e));
// }

const getContactList = createAsyncThunk("contact/getContactList", async () => {
  const res = await fetch("data/contact.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((data) => data.json());
  return res;
});

// const populateContactList = async () => {
//   return await getContact();
// };

export const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    contactList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getContactList.pending]: (state) => {
      state.loading = true;
    },
    [getContactList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.contactList = payload;
    },
    [getContactList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setContactList } = ContactSlice.actions;

export const selector = (state) => state.contact;

export default ContactSlice.reducer;
