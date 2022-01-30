import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Bookings from "./pages/Bookings/Bookings";
import Booking from "./pages/Bookings/Booking";
import Contact from "./pages/Contact/Contact";
import Rooms from "./pages/Rooms/Rooms";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.styled";
import { AuthProvider } from "./context";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route
              path="" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="bookings"
              element={
                <PrivateRoute>
                  <Bookings />
                </PrivateRoute>
              }
            />
            <Route
              path="bookings/:element"
              element={
                <PrivateRoute>
                  <Booking/>
                </PrivateRoute>
              }
            />
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
            >
              <Route
                path=":roomId"
                element={
                  <PrivateRoute>
                    <Rooms />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="users"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            >
              <Route
                path=":userId"
                element={
                  <PrivateRoute>
                    <Users />
                  </PrivateRoute>
                }
              >
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
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
