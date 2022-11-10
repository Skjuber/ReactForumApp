import Header from "./Header";
import { Outlet } from "react-router-dom";

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
