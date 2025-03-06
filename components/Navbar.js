"use client";

import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <>
      <nav className="bg-slate-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/8928/8928661.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-600">
              MY SHOP
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
            >
              Sign Up
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink href="/product">Home</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/about-us">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
