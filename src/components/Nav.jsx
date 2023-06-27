import React from "react";
import { FaEye, FaViber, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Button, Text } from "@mantine/core";
import Navbar from "./Navbar";

const Nav = () => {
  const data = [
    {
      icon: <BsFillTelephoneFill />,
      phone: "6248 0838",
    },
    {
      icon: <FaViber />,
      phone: "8484 9948",
    },
    {
      icon: <FaEnvelope />,
      phone: "info@visibleone.com",
    },
  ];
  return (
    <>
      <div className=" bg-gray-100 h-12">
        <div className=" font-custom flex justify-around  items-center">
          <p className=" text-blue-400 flex items-center gap-1">
            VISIBLE
            <span className=" text-green-400 flex gap-1 items-center">
              <FaEye className=" text-xl" />
              <span>NE</span>
            </span>
          </p>
          <div className=" flex gap-10 justify-end items-center">
            {data.map((pd) => (
              <div key={pd.phone}>
                <p className=" flex gap-2 items-center justify-end">
                  <span className=" text-blue-500">{pd.icon}</span>
                  <span className="text-gray-700">{pd.phone}</span>
                </p>
              </div>
            ))}

            <button className=" text-white bg-green-600 py-1 rounded-xl w-32 flex justify-center items-center text-base">
              <AiFillFileText className=" text-white text-lg" />
              <span className=" text-sm mt-1">QUOTE</span>
            </button>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <button className=" flex items-center gap-3 rounded-md text-blue-500 px-4 py-1 border-2 border-blue-600">
                  SG EG <MdKeyboardArrowDown className="" />
                </button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>SG</Menu.Item>
                <Menu.Item>EG</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
      </div>
        <Navbar />
    </>
  );
};

export default Nav;
