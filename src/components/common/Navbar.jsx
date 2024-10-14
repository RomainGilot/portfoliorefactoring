import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import BurgerIcon from "../icons/burger";
import { useTranslation } from "react-i18next";
import { PORTFOLIO } from "../../utils/constants";

export default function Navbar() {
  const { t } = useTranslation();
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 sm:p-7 z-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href={PORTFOLIO}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20 md:h-36" alt="Logo" />
          </a>
          <button
            onClick={toggleNavVisibility}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <BurgerIcon />
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isNavVisible ? "hidden" : ""
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#a-propos-de-moi"
                  className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
                  aria-current="page"
                >
                  {t("navbar.aboutMe")}
                </a>
              </li>
              <li>
                <a
                  href="#mes-projets"
                  className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
                >
                  {t("navbar.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#parcours"
                  className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
                >
                  {t("navbar.journey")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
                >
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
