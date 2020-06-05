import { StateInfo } from "mascotas_react_info";
import { NewPet, Pets } from "mascotas_react_pets";
import { Profile } from "mascotas_react_profile";
import { ChangeUserPassword, LoginUser, RegisterUser } from "mascotas_react_users";
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import LoggedInRoute from "../common/components/LoggedInRoute";
import Welcome from "../welcome/Welcome";
import "./App.css";
import Menu from "./Menu";
import Toolbar from "./Toolbar";

export default function App() {
  return (
    <HashRouter>
      <table className="app_table">
        <thead>
          <tr className="app_toolbar">
            <td colSpan={2} >
              <Toolbar />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="app_menu">
              <Menu />
            </td>
            <td id="content" className="app_content">
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={LoginUser} />
              <Route path="/newUser" component={RegisterUser} />
              <LoggedInRoute path="/info" component={StateInfo} />
              <LoggedInRoute path="/password" component={ChangeUserPassword} />
              <LoggedInRoute path="/profile" component={Profile} />
              <LoggedInRoute path="/pets" component={Pets} />
              <LoggedInRoute path="/editPet" component={NewPet} />
              <LoggedInRoute path="/editPet/:id" component={NewPet} />
            </td>
          </tr>
        </tbody>
      </table>
    </HashRouter >
  );
}
