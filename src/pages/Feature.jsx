import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import idk from "../assets/idk.png";
import desk from "../assets/desk.png";
import ph from "../assets/phone.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const [change, setChange] = useState(true);

  const clickHandler = () => {
    setChange(!change);
  };

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-end"
      >
        {change ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2}}
            className="w-[100%] flex"
          >
            {/* left side */}
            <div className="w-4/12">
              <img className="h-[300px] absolute left-[-250px]" src={idk} alt="" />
            </div>

            {/* right side */}
            <div className="w-8/12 bg-gradient-to-r flex items-center justify-end pr-24 from-[rgb(58,231,171)] to-[rgb(45,196,234)] h-[400px] relative">
              <div className="text-white w-7/12">
                <h1 className="font-bold mb-10">Their Old Website & Problems</h1>
                <div className="flex flex-col gap-5">
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                </div>
                <button
                  className="py-2 px-5 bg-gradient-to-r from-[rgb(45,197,233)] border border-white rounded-3xl mt-10 to-[rgb(58,231,172)]"
                  onClick={clickHandler}
                >
                  Mobile
                </button>
              </div>

              {/* desktop */}
              <div className="bg-[rgb(88,89,91)] h-[280px] w-[500px] left-[-250px] top-0 absolute rounded-t-xl p-5">
                <img src={desk} alt="" />
              </div>
              <div className="bg-[rgb(197,205,211)] h-[50px] w-[500px] left-[-250px] top-[280px] absolute rounded-b-xl flex justify-center items-center">
                <div className="w-5 h-5 rounded-full bg-[rgb(88,89,91)]"></div>
              </div>
              <div className="left-[-75px] top-[330px] flex absolute bg-[rgb(110,114,120)] h-[50px] w-36"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2}}
            className="flex justify-around"
          >
            {/* left side */}
            <div className="w-2/12 relative">
              <div className="absolute left-[-700px] gap-10 flex">
                <img className="h-[400px]" src={p2} alt="" />
                <img className="h-[400px]" src={p3} alt="" />
                <img className="h-[400px]" src={p4} alt="" />
              </div>
            </div>

            {/* right side */}
            <div className="w-10/12 bg-gradient-to-r flex items-center justify-end pr-24 from-[rgb(58,231,171)] to-[rgb(45,196,234)] h-[400px] relative">
              <div className="text-white w-9/12">
                <h1 className="font-bold mb-10">Their Old Website & Problems</h1>
                <div className="flex flex-col gap-5">
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                  <div className="flex">
                    <AiOutlineArrowRight className="text-xl" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, distinctio consectetur
                      minus, debitis molestiae suscipit esse neque laborum
                    </p>
                  </div>
                </div>
                <button
                  className="py-2 px-5 bg-gradient-to-r from-[rgb(45,197,233)] border border-white rounded-3xl mt-10 to-[rgb(58,231,172)]"
                  onClick={clickHandler}
                >
                  Desktop
                </button>
              </div>

              {/* phone */}
              <div className="flex justify-center items-center h-[100%] w-[500px] left-[-250px] top-5 absolute">
                <img src={ph} className="h-[120%] z-20 absolute" alt="" />
                <img src={p1} className="absolute z-10 right-[140px] w-[210px] top-2" alt="" />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Feature;
