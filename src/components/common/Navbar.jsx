import React from "react";
import { FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="bg-transparent sticky top-0 backdrop-blur-md">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/meal-app" className="-m-1.5 p-1.5">
              <img className="h-14 w-auto" src={logo} alt="logo" />
            </a>
          </div>
          
          {window.location.pathname.includes("/meal-app/fav") ||
          window.location.pathname.includes("/meal-app/det/") ? (
            <>
              {window.location.pathname.includes("/meal-app/det/") ? (
                <>
                  <div className="flex lg:gap-x-12 mr-5">
                    <a
                      href="/meal-app"
                      className="text-lg font-semibold leading-6 text-gray-900"
                    >
                      Home
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <a
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-600"
                      href="/meal-app/fav"
                    >
                      <FaHeart className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    <a
                      href="/meal-app/fav"
                      className="text-lg font-semibold leading-6 text-red-600"
                    >
                      Favourites
                    </a>
                  </div>
                </>
              ) : (
                <div className="lg:flex lg:gap-x-12">
                  <a
                    href="/meal-app"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Home
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex lg:hidden">
                <a
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-600"
                  href="/meal-app/fav"
                >
                  <FaHeart className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <a
                  href="/meal-app/fav"
                  className="text-lg font-semibold leading-6 text-red-600"
                >
                  Favourites
                </a>
              </div>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
