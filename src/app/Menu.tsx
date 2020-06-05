import { useTokenState } from "mascotas_react_store";
import React from "react";
import LoginMenu from "./LoginMenu";
import MainMenu from "./MainMenu";
import "./Menu.css";

export default function Menu() {
  const token = useTokenState()

  return (
    <div className="menu_div navbar-nav bg-light shadow">
      {token ? <MainMenu /> : <LoginMenu />}
    </div>
  );
}
