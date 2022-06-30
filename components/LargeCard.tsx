import React from 'react'
import Image from "next/image"

const LargeCard = ({img,title,description,buttonText}) => {
  return (
    <section className="">
        <div className="relative">
            <Image src={img} layout="fill" objectFit='cover'></Image>
        </div>
    </section>
  )
}

export default LargeCard