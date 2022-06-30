import Image from "next/image";
import React from "react";

const MediumCard = ({ item }) => {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
      <div className="relative w-80 h-80">
        <Image src={item.img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{item.title}</h3>
    </div>
  );
};

export default MediumCard;
