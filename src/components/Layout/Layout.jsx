import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar.jsx";

const Layout = () => {
  return (
    <div className="container">
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
