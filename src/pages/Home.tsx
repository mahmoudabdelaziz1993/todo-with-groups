import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { MdDraw, MdOutlineCode, MdLoyalty, MdAdd } from "react-icons/md";
// @ts-ignore
import logo from "../assets/images/logo.svg";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex gap-2 flex-grow artboard">
      {/* Left side */}
      <div className=" max-w-sm bg-base-300 pt-8 px-14">
        {/* Logo */}
        <div className=" cursor-not-allowed">
          <img src={logo} alt="" className="image-full" />
        </div>
        {/* nav */}
        <ul className="menu pt-12 w-56 p-2 rounded-box gap-2">
          <li className="menu-title capitalize">
            <span>Groubs</span>
          </li>
          <li>
            <a href="#">
              <MdDraw />
              Design
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineCode />
              Development
            </a>
          </li>

          <li>
            <a href="#">
              <MdLoyalty />
              Markting{" "}
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-info  bg-[#00587A] gap-3">
              <MdAdd />
              add group
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-grow">2</div>
    </div>
  );
};

export default Home;
