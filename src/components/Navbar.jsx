import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img className="h-[32px] w-[124px]" src={logo} alt="hoobank" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            className={`cursor-pointer font-poppins text-[16px] 
            font-normal hover:text-secondary ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          className="h-[28px] w-[28px] object-contain"
          alt="menu"
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient sidebar absolute 
            top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex-1 list-none flex-col items-center justify-end">
            {navLinks.map((nav, index) => (
              <li
                className={`cursor-pointer font-poppins text-[16px] 
                    font-normal ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
