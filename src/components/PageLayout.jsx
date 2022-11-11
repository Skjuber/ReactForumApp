import Header from "./Header/header";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default PageLayout;
