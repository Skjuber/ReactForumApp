import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar>
      <Nav class="border border-secondary ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.navlink}  ${isActive ? `${css.active}` : ""}`
          }
        >
          Home
        </NavLink>{" "}
        {/* {" I "} */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${css.navlink}  ${isActive ? `${css.active}` : ""}`
          }
        >
          About
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
