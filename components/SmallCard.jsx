import React from "react";
import Image from "next/image";

const SmallCard = ({ item }) => {
  console.log(item);
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition-transform duration-200 border-2 cursor-pointer hover:scale-105 rounded-xl hover:bg-gray-100">
      {/* LEFT */}
      <div className="relative w-16 h-16 ">
        <Image src={item.img} layout="fill" className="rounded-lg" />
      </div>

      {/* RIGHT */}
      <div className="">
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
