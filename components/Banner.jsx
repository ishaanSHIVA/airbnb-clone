import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={
          "https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        }
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white border-2 rounded-full shadow-md hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
