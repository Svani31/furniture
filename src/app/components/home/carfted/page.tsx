import image1 from "@/Images/charit1.png"
import image2 from "@/Images/chair2.png"
import image3 from "@/Images/chair3.png"
import Image from "next/image";

const Crafted = () => {
  return (
    <div className="pl-36 pr-36 mt-40 mb-40 flex gap-36">
      <div className="w-52">
        <h1 className="text-3xl">Crafted with excellent material.</h1>
        <h1 className="mt-6 text-liteGray">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </h1>
        <button className="pt-3 pb-3 pl-5 pr-5 bg-darkGray rounded-3xl mt-7 text-white hover:bg-transparent border-2 hover:text-black ease-in-out duration-300">Explore</button>
      </div>
        <div className=" hover:bg-liteGray rounded-3xl ease-in-out duration-300 p-5">
        <Image src={image1} alt="Image"/>
        

        </div>
        <div className="hover:bg-liteGray rounded-3xl ease-in-out duration-300 p-5">
        <Image src={image2} alt="Image"/>
        </div>
        <div className="hover:bg-liteGray rounded-3xl ease-in-out duration-300 p-5">
        <Image src={image3} alt="Image"/>
        </div>
    </div>
  );
};

export default Crafted;
