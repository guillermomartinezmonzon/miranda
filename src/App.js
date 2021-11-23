import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Concierge from "./pages/Concierge/Concierge";
import Guests from "./pages/Guests/Guests";
import Reviews from "./pages/Reviews/Reviews";
import Rooms from "./pages/Rooms/Rooms";
import Guest from "./pages/Guests/Guest";
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
            path="guests"
            element={
              <PrivateRoute>
                <Guests />
              </PrivateRoute>
            }
          >
            <Route
              path=":guestId"
              element={
                <PrivateRoute>
                  <Guest />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="reviews"
            element={
              <PrivateRoute>
                <Reviews />
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
            path="concierge"
            element={
              <PrivateRoute>
                <Concierge />
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
