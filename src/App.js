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
import { Container } from "./styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.styled";
import SideMenu from "./components/SideMenu/SideMenu";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* /bookings */}
          <Route
            path="bookings"
            element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>
            }
          >
            {/* /bookings/:bookingId */}
            <Route
              path=":bookingId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            >
              {/* /bookings/:bookingId/create */}
              <Route
                path="create"
                element={
                  <PrivateRoute>
                    <Booking />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
          {/* /contact */}
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          {/* /rooms */}
          <Route
            path="rooms"
            element={
              <PrivateRoute>
                <Rooms />
              </PrivateRoute>
            }
          >
            {/* /rooms/:roomId */}
            <Route
              path=":roomId"
              element={
                <PrivateRoute>
                  <Rooms />
                </PrivateRoute>
              }
            >
              {/* /rooms/:roomId/edit */}
              <Route
                path="edit"
                element={
                  <PrivateRoute>
                    <Rooms />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
          {/* /users */}
          <Route
            path="users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          >
            {/* /users/:userId */}
            <Route
              path=":userId"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            >
              {/* /users/:userId/edit */}
              <Route
                path="edit"
                element={
                  <PrivateRoute>
                    <Users />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
          {/* / */}
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
    </ThemeProvider>
  );
}
