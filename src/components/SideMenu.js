import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <nav>
      <Link to="/concierge">Concierge</Link>
      <br />
      <br />
      <Link to="/">Dashboard</Link>
      <br />
      <br />
      <Link to="/guests">Guests</Link>
      <br />
      <br />
      <Link to="/reviews">Reviews</Link>
      <br />
      <br />
      <Link to="/rooms">Rooms</Link>
    </nav>
  );
}
