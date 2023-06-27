import React from "react";
import {FaSearch} from "react-icons/fa"

const Navbar = () => {
  const data = [
    { id: "1", title: "Home" },
    { id: "2", title: "Service" },
    { id: "3", title: "Company" },
    { id: "4", title: "Blog" },
    { id: "5", title: "Contact Us" },
    { id: "6", title: <FaSearch/> },
  ];
  return (
    <div className=" flex justify-end items-center mx-auto w-[80%] gap-10  mt-3">
      {data.map((pd) => (
        <div key={pd.id}>
          <p className="text-gray-600 font-semibold text-lg ">{pd.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
