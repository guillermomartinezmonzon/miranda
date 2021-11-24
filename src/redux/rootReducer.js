import contactReducer from "./slices/ContactSlice";
import bookingsReducer from "./slices/BookingsSlice";
import roomsReducer from "./slices/RoomsSlice";
import usersReducer from "./slices/UsersSlice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  contact: contactReducer,
  bookings: bookingsReducer,
  rooms: roomsReducer,
  users: usersReducer,
});
