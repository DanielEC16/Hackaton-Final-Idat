import { faMagnifyingGlass, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./comp_icons/Icon";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <nav className="nav-bar-container">
        <div className="logo">
          <Icon icon={faMicrochip} />
          <h1 className="tittle">Tecnology's</h1>
        </div>

        <div className="search">
          <input type="text" />
          <Icon icon={faMagnifyingGlass} />
        </div>
      </nav>
    </>
  );
};
