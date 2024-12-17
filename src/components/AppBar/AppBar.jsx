import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";
import Logo from "../Logo/Logo.jsx";

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.nav}>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
