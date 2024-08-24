"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const [urlPath,setUrlPath] = useState<any>("")
    const [headers, setHeaders] = useState([
        { key: "Home", label: "Home", path: "/components/home", pathUrl: "home" },
    {
      key: "AboutUs",
      label: "About Us",
      path: "/components/about",
      pathUrl: "about",
    },
    {
      key: "Service",
      label: "Service",
      path: "/components/service",
      pathUrl: "service",
    },
    { key: "Blog", label: "Blog", path: "/components/blog", pathUrl: "blog" },
    {
        key: "ContactUs",
        label: "Contact Us",
        path: "/components/contact",
        pathUrl: "contact",
    },
]);

const router = useRouter();


  useEffect(()=>{
    const url = window.location.pathname.split("/").pop();
    setUrlPath(url)
  },[])


  const clickHandler = (header: any) => {
    setUrlPath(header.pathUrl)    
    router.push(header.path);
  };
  console.log(urlPath)

  return (
    <div className="flex justify-between pt-12 pl-36 pr-36 bg-darkGreen">
      <h1 className="font-bold text-3xl text-white cursor-pointer">Furni.</h1>
      <div className="flex gap-5">
        {headers.map((header) => (
          <div
            onClick={() => clickHandler(header)}
            key={header.key}
            className="cursor-pointer"
          >
            <h1 className={urlPath == header.pathUrl ? " underline underline-offset-4 decoration-4 decoration-yellow text-white" : "text-liteGray"} >{header.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
