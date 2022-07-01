import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const resetInput = () => {
    setLocation("");
  };

  const search = () => {
    resetInput();
    router.push({
      pathname: "/search",
      query: {
        location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:p-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src={"https://links.papareact.com/qd3"}
          transiton
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
          placeholder={placeholder || "Start Your Search"}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
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

      {location && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            min={new Date()}
            rangeColors={["#FD5B61"]}
            ranges={[selectionRange]}
            onChange={handleSelect}
          ></DateRangePicker>

          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow pl-2 text-2xl font-semibold">
              Number Of Guests
            </h2>
            <UsersIcon className="h-5 cursor-pointer" />
            <input
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              min={1}
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-red-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-gray-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
