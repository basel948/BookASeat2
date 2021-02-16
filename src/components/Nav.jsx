import React from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Nav() {
  
  return (
    <nav className="nav-bar">
      <ul className="nav-Links">
        <Link to="/booking">
          <li>Booking</li>
        </Link>
        <Link to="/booked">
          <li>Booked</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/">
          <li>
            LogOut
            <ExitToAppIcon />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
