import { Link } from "react-router";
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={s.navbarWrapper}>
      <h1 className={s.title}>
        Cybersecurity Event Viewer (Router Framework Style)
      </h1>
      <nav>
        <Link className={s.link} to="/">
          Dashboard
        </Link>{" "}
        |{" "}
        <Link className={s.link} to="/events">
          Events
        </Link>
      </nav>
      <hr />
    </div>
  );
};
