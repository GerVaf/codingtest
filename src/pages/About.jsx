import { Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import "../App.css";
import tablet from "../assets/Tablet.png";
import challengeImg from "../assets/challenge.png";

("https://jsonplaceholder.typicode.com/posts");

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <>
      <div className=" flex justify-between  mx-auto  w-[75%] items-center">
        {/* <div className=" flex justify-between w-full bg-w gap-12 items-center">
      </div> */}
        <div className=" w-96">
          <div className=" flex gap-3  text-gray-700 font-semibold text-xl ">
            <p>ABOUT</p>

            <span className=" text-blue-600 tracking-wide font-semibold ">
              TRIPPRO
            </span>
          </div>
          <Divider size="md" className=" w-16 " />
          <p className=" tracking-wide leading-8 text-gray-600 text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            maiores numquam laudantium ratione repellat recusandae ea minus sint
            nam accusamus, molestiae ipsam modi exercitationem incidunt at
            culpa, quam placeat ullam.
          </p>
        </div>
        <div className=" relative">
          <div className=" dash "></div>
          <div className=" dash2 absolute top-5 left-5 flex justify-center items-center "></div>
          <div className=" dash3 absolute top-10 left-10 flex justify-center items-center "></div>
          <img
            className="top-10 left-20 flex justify-center items-center absolute w-52 h-auto object-cover"
            src={tablet}
            alt=""
            style={{ zIndex: "1000px" }}
          />
        </div>
      </div>
      <div className=" mt-10 w-[70%] h-full bg-blck mx-auto flex gap-10">
        <img className=" w-96 h-96" src={challengeImg} alt="" />
        <div className=" w-full">
          <div className="flex  gap-3 text-xl font-semibold">
            OUR <p className="text-green-600">CHALLENGES</p>
          </div>
          <div className="  flex flex-wrap gap-5 mt-3 justify-center items-center">
            {posts.map((post) => (
              <div
                key={post.id}
                className=" flex flex-col w-52 h-52 shadow-xl rounded-lg p-3 "
              >
                <div className=" ">
                  <h2 className=" text-gray-500 text- capitalize mb-2 font-semibold">
                    {post.title.substring(0, 20)}
                  </h2>
                  <p className=" text-sm">{post.body}</p>
                </div>
              </div>
            ))}
          </div>
          <button className=" bg-green-500 text-white px-5 py-2 rounded mt-3 ml-4">View More</button>
        </div>
      </div>
    </>
  );
};

export default About;
