import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import css from "./pagelayout.module.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const PageLayout = () => {
  return (
    <Container s>
      <Header />
      <div className={css.main}>
        <Outlet />
      </div>
    </Container>
  );
};

export default PageLayout;
