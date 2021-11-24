import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <nav>
      <Link to="/users">Users</Link>
      <br />
      <br />
      <Link to="/">Dashboard</Link>
      <br />
      <br />
      <Link to="/bookings">Bookings</Link>
      <br />
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <br />
      <Link to="/rooms">Rooms</Link>
    </nav>
  );
}
