import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function Booking() {
  return (
    <div>
      <h1>Booking</h1>
      <SideMenu />
      <Link to="/">return</Link>
    </div>
  );
}
