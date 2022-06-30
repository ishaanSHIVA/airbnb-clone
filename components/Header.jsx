import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:p-10">
      {/* left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src={"https://links.papareact.com/qd3"}
          objectPosition="left"
          objectFit="contain"
          layout="fill"
        />
      </div>

      {/* Middle - Search */}

      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 text-sm text-gray-600 bg-transparent outline-none placeholder-text-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden h-8 p-2 mx-auto text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
      </div>
      {/* right */}

      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
