import { NavLink } from "react-router-dom";
import css from "./header.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiAirchina } from "react-icons/si";

const Navigation = () => {
  return (
    <Container fluid className="border border-secondary bg-light">
      <Navbar>
        <Nav>
          <SiAirchina className="m-2"></SiAirchina>
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
    </Container>
  );
};

export default Navigation;
