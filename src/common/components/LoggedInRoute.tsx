import { useTokenState } from "mascotas_react_store";
import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Welcome from "../../welcome/Welcome";

export default function StateLoggedInRoute(props: RouteProps) {
  const token = useTokenState()

  console.trace("StateLoggedInRoute - ")

  if (token === undefined) {
    return (<Route exact path={props.path} component={Welcome} />);
  } else {
    return (<Route exact path={props.path} component={props.component} />);
  }
}
