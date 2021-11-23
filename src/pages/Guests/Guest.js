import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

export default function Guest() {
  return (
    <div>
      <h1>Guest</h1>
      <SideMenu />
      <Link to="/">return</Link>
    </div>
  );
}
