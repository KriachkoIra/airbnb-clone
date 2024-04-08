/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { SearchIcon, HamburgerIcon, UserIcon, PlaneIcon } from "../assets/svgs";

export default function Header() {
  return (
    <header className="flex justify-between">
      <a href="#" className="flex items-center gap-1">
        <PlaneIcon />
        <span className="font-bold text-xl">airbnb</span>
      </a>

      <div className="flex gap-3 border border-gray-300 rounded-full py-2 px-6 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Anytime</div>
        <div className="border-l border-gray-300"></div>
        <div>Guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <SearchIcon />
        </button>
      </div>
      <Link
        to="/login"
        className="flex items-center gap-3 border border-gray-300 rounded-full py-2 px-6"
      >
        <HamburgerIcon />
        <UserIcon />
      </Link>
    </header>
  );
}
