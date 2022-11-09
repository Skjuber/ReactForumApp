import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import css from "./pagelayout.module.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const PageLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default PageLayout;
