import React from "react";
import {
  MdDraw,
  MdOutlineCode,
  MdLoyalty,
  MdAdd,
  MdStar,
} from "react-icons/md";
// @ts-ignore
import logo from "../assets/images/logo.svg";
import HomeHeader from "../components/HomeHeader";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex  flex-grow artboard">
      {/* Left side */}
      <div className=" max-w-sm bg-base-200 pt-8 px-14">
        {/* Logo */}
        <div className=" cursor-not-allowed">
          <img src={logo} alt="" className="image-full" />
        </div>
        {/* nav */}
        <ul className="menu pt-12 w-56 p-2 rounded-box gap-2">
          <li className="menu-title uppercase">
            <span>Groups</span>
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
            <a href="#" className="btn btn-primary text-primary-content">
              <MdAdd />
              add group
            </a>
          </li>
        </ul>
      </div>
      {/* right side */}
      <div className="flex-grow flex flex-col gap-2">
        <HomeHeader />
        {/* sub Header */}
        <div className="flex px-14 justify-between py-7">
          <div className="flex items-end gap-4">
            <div className="">
              <h3 className="text-lg font-medium">Task Meter 25/50</h3>
              <progress
                className="progress progress-primary w-56"
                value="25"
                max="50"
              ></progress>
            </div>
            <p className="text-warning inline-flex gap-2">
              <MdStar />
              Good Job!
            </p>
          </div>
          <button className="btn btn-primary gap-2">
            <MdAdd />
            Add Task
          </button>
        </div>

        {/* sections */}
      </div>
    </div>
  );
};

export default Home;
