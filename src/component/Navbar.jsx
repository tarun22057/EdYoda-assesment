import React from "react";
import Logo from "./Logo";
import Courses from "./Courses";
import Programs from "./Programs";
import Search from "./Search";
import Login from "./Login";
import Join from "./Join";
function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Logo />
        <Courses />
        <Programs />
      </div>
      <div className="nav-right">
        <Search />
        <Login />
        <Join />
      </div>
    </nav>
  );
}
export default Navbar;
