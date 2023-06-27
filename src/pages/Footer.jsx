import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLine } from "react-icons/bs";
import bg from "../assets/bg.jpg";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-white h-[50vh] w-[100%] mt-20 relative gap-2">
      <img
        src="https://images.unsplash.com/photo-1558584402-61820fd81dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        className=" absolute z-[-1] opacity-90 object-cover h-[100%] w-[100%]"
        alt=""
      />
      <div className="flex justify-around">
        {/* text  */}
        <div className="w-8/12 flex justify-around">
          {/* Quick links  */}
          <div>
            <p className="text-lg mb-2">QUICK LINKS</p>
            <ul className="flex flex-col gap-2">
              <li>Service</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Quotation</li>
              <li>Partnership</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Our service  */}
          <div>
            <p className="text-lg mb-2">OUR SERVICE</p>
            <ul className="flex flex-col gap-2">
              <li>Web Development</li>
              <li>Web Desgin</li>
              <li>Responsive Website Desgin</li>
              <li>CMS Website Desgin</li>
              <li>UI & UX Website Desgin</li>
              <li>360 Virtual Tour</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-2">
              <li>Ecommerce Development</li>
              <li>WooCommernce Development</li>
              <li>osCommernce Development</li>
              <li>Magento Development</li>
              <li>BigCommernce Development</li>
              <li>SSL Certificate</li>
              <li>Promotion Video</li>
            </ul>
          </div>
        </div>

        {/* About  */}
        <div className="flex flex-col gap-2">
          <p className="text-lg mb-2">VISIBLE ONE SINGPORE</p>
          <p>+65 6248 0908</p>
          <p>info@visibel@gmail.com</p>
          <p>24 sin ming lane midview city #53-23</p>
          <p>Singpore 995389</p>
          <p>Office Hour: Mon-Fri (9am-6pm)</p>
          <div className="flex gap-10 items-center">
            <button className="p-3 bg-[rgb(38,169,224)] text-white">
              Contact Us
            </button>
            <a href="" className="text-[rgb(38,169,224)]">
              {" "}
              Contact KH Office
            </a>
          </div>
        </div>
      </div>
      <hr />
      {/* logo  */}
      <div className="w-12/12 flex justify-around items-center">
        {/* logo */}
        <div className="w-7/12 gap-5 flex justify-center">
          <img className=" w-28 h-28 object-contain" src={f1} alt="" />
          <img className=" w-28 h-28 object-contain" src={f2} alt="" />
          <img className=" w-28 h-28 object-contain" src={f3} alt="" />
          <img className=" w-28 h-28 object-contain" src={f4} alt="" />
          <img className=" w-28 h-28 object-contain" src={f5} alt="" />
        </div>
        {/* input  */}
        <div className="w-5/12 flex flex-col items-center">
          <p className="text-white">
            Subscribe to our news , tips and guidelines
          </p>
          <div className="flex gap-10">
            <input className=" bg-transparent border-white border p-3" type="text" placeholder="ex@gmail.com" />
            <button className="p-3 bg-[rgb(38,169,224)] text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-2 flex-col">
        {/* icons  */}
        <div className="flex justify-center text-3xl gap-3">
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <BsLine />
        </div>
        <div className="flex justify-center gap-5">
          <p>shopping</p>
          <p>terms & conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
