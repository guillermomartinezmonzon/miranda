import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Bookings from "./pages/Bookings/Bookings";
import Booking from "./pages/Bookings/Booking";
import Contact from "./pages/Contact/Contact";
import Rooms from "./pages/Rooms/Rooms";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import useToken from "./utils/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="bookings"
            element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>
            }
          >
            <Route
              path=":guestId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="rooms"
            element={
              <PrivateRoute>
                <Rooms />
              </PrivateRoute>
            }
          />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
