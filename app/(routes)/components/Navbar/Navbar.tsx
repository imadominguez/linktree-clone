import React from "react";
import { NavBarProps } from "./Navbar.types";

export const Navbar = (props: NavBarProps) => {
  const { user } = props;
  return <div>{user}</div>;
};
