import { Header } from "../../primitives/Header/Header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
