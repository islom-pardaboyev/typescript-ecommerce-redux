import { NavLink } from "react-router-dom";
import { NavbarContext } from "../../assets";
import { NavbarTypes } from "../../types";
import './Header.css'

function Header() {
  return (
    <header className="shadow-xl">
      <div className="container w-full flex items-center justify-between py-4 sticky top-0">
        <h1 className="font-bold text-3xl font-sofadi">E-Commerce</h1>

        <nav className="flex items-center gap-3 font-inter">
        {NavbarContext.map((item: NavbarTypes) => (
          <NavLink className="font-medium text-xl border-b-2 border-transparent duration-500" to={item.path} key={item.id}>
            {item.name}
          </NavLink>
        ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
