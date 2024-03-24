import React from "react";
import "./Navbar.scss";
import black_app_icon from "../../assets/black-app-icon.png";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div id="left">
        <img src={black_app_icon} width="40px" alt="" />
        <h2>Chats</h2>
      </div>
      <div id="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login / Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
