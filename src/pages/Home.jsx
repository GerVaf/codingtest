import React from "react";
import Layout from "../Layout";
import homeImg from "../assets/home.png";
import laptopImg from "../assets/Laptop.png";
import innerLaptopImg from "../assets/innerLaptop.png";
import { BsWordpress } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import About from "./About";
import { Divider } from "@mantine/core";
import Feature from "./Feature";
import Footer from "./Footer";

const Home = () => {
  const gradientColors = "from-gray-500 to-red-500";
  return (
    <>
      <div className="mt-5 h-screen ">
        <div
          className={`bg h-full bg-gradient-${gradientColors} relative w-full bg-no-repeat bg-cover object-cover bg-center `}
          style={{
            backgroundImage: `url(${homeImg}),linear-gradient(to right, rgba(111, 0, 255, 0.7), rgba(0, 212, 255, 0.7))`,
          }}
        >
          <div className=" flex justify-center items-center h-full">
            <div className="block">
              <h2 className=" text-center text-white text-3xl font-semibold">
                TRIPPRO -AN ECOMMERCE SOLUTION
              </h2>
              <p className="text-white w-%] mx-auto ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                at aspernatur, enim, placeat reprehenderit cum tempore,
                voluptatibus
                <p className=" text-center">
                  quas quasi corporis possimus! Fugit in sequi assumenda
                </p>
              </p>
              <div className=" text-center flex justify-center items-center gap-7 my-3">
                <div className="flex gap-3 items-center text-white ">
                  <p className=" text-2xl font-semibold tracking-wide">
                    Built for:
                  </p>
                  <MdOutlineComputer className=" text-4xl" />
                </div>
                <Divider size="md"  orientation="vertical" />
                <div className=" flex gap-3 items-center text-white">
                  <div className="">
                    <p>Technologies:</p>

                    <p>Wordpress</p>
                  </div>
                  <BsWordpress className=" text-white  text-2xl" />
                </div>
                <Divider size="md"  orientation="vertical" />

                <div className=" flex gap-3 items-center text-white">
                  <div className="">
                    <p>Industry:</p>

                    <p>Ecommerce</p>
                  </div>
                  <div className="">
                    <FaCartShopping className=" text-white  text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-[27rem] h-auto absolute" src={laptopImg} alt="" />
            <img
              className="w-80 absolute h-auto "
              style={{ zIndex: "1000px" }}
              src={innerLaptopImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" mt-72"></div>
      <About />
      <Feature/>
      <Footer/>
    </>
  );
};

export default Home;
