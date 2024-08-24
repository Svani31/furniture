"use client"
import car from "../../../../../Images/Truck.png";
import bag from "../../../../../Images/Shop bag.png";
import wheel from "../../../../../Images/Support.png";
import returnes from "../../../../../Images/Return.png";
import whyChooseUs from "../../../../../Images/why-choose-us-img 1.png";
import Image from "next/image";
import { useState } from "react";
import { title } from "process";

const Choose = () => {
  const [choosCol, setChoosCol] = useState([{
    img: car,
    title: "Fast  & Free Shipping ",
    body: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },{
    img:bag,
    title:"Easy to Shop",
    body:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
  },{
    img:wheel,
    title:"24/7 Support",
    body:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
  },{
    img:returnes,
    title:"Hassle Free Returns",
    body:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
  }]);

  return (
    <div className="pl-36 pr-36 mt-40 mb-40 flex justify-between">
      <div>
        <h1 className="text-3xl font-bold text-black">Why Choose Us</h1>
        <h1 className="w-96 mt-4 text-liteGray">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done. the
        </h1>
        <div style={{ width: "540px",display:"grid",gridTemplateColumns:"auto auto" }}>
          {choosCol.map((eachCol)=>{
            return(
                <div className="mt-20 w-60" key={eachCol.title}>
            <div className="w-8 h-8 bg-transparent rounded-full relative">
              <Image
                src={eachCol.img}
                alt="Image"
                className="absolute right-3 bottom-2"
              />
            </div>
            <h1 className="text-black font-bold text-sm mt-2">
             {eachCol.title}
            </h1>
            <h1 className="text-liteGray mt-2">
                {eachCol.body}
            </h1>
          </div>
            )
          })}
        </div>
      </div>
      <Image src={whyChooseUs} alt="Image" />
    </div>
  );
};

export default Choose;
