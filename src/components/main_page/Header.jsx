import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="fixed w-full z-50 hidden md:flex h-navBar bg-[#3D5DFD]/30 drop-shadow-md py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between">
          <li>
            <a
              href="/"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                HOME
              </Link>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-75}
              >
                ABOUT
              </Link>
            </a>
          </li>
          <li>
            <a
              href="/tracks"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="tracks"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                TRACKS
              </Link>
            </a>
          </li>
          <li>
            <a
              href="/schedule"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="schedule"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                SCHEDULE
              </Link>
            </a>
          </li>
          {/* <li>
            <a
              href="/prizes"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="prizes"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                PRIZES
              </Link>
            </a>
          </li> */}
          <li>
            <a
              href="/faq"
              className="text-navText text-white font-racesport hover:underline"
            >
              <Link
                to="faq"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                FAQ
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
