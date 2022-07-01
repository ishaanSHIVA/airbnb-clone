import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({ item }) => {
  return (
    <>
      <div className="flex px-2 pr-4 mt-5 transition duration-200 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
        <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80 ">
          <Image
            src={item.img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">{item.location}</p>
            <HeartIcon className="cursor-pointer h-7" />
          </div>

          <h4 className="text-xl">{item.title}</h4>

          <div className="w-10 pt-2 border-b"></div>

          <p className="flex-grow pt-2 text-sm text-gray-500">
            {item.description}
          </p>

          <div className="flex items-end justify-between pt-5 ">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" /> {item.star}
            </p>

            <div className="">
              <p className="pb-2 text-lg font-semibold lg:text-2xl">
                {item.price}
              </p>
              <p className="text-right font-extralight">{item.total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
