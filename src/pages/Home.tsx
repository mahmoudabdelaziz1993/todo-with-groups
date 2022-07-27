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
import { GoPrimitiveDot } from "react-icons/go";
import Task from "../components/Task";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex  flex-grow artboard sm:flex-row flex-col">
      {/* Left side */}
      <div className=" max-w-md bg-base-200 pt-8 px-14">
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
            <a href="#!">
              <MdDraw />
              Design
            </a>
          </li>
          <li>
            <a href="#!">
              <MdOutlineCode />
              Development
            </a>
          </li>

          <li>
            <a href="#!">
              <MdLoyalty />
              Markting{" "}
            </a>
          </li>
          <li>
            <a href="#!" className="btn btn-primary text-primary-content">
              <MdAdd />
              add group
            </a>
          </li>
        </ul>
      </div>
      {/* right side */}
      <div className="flex-grow flex flex-col gap-2 flex-wrap">
        <HomeHeader />
        {/* sub Header */}
        <div className="flex md:px-14 justify-between md:py-7 p-2 flex-wrap gap-2">
          <div className="flex items-end gap-4">
            <div className="">
              <h3 className="text-lg font-medium">Task Meter 25/50</h3>
              <progress
                className="progress progress-primary w-56"
                value="25"
                max="50"
              ></progress>
            </div>
            <p className="text-warning inline-flex gap-2 items-center">
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
        <div className="flex gap-4 flex-grow md:p-7 p-2 flex-wrap sm:flex-nowrap">
          <div className="flex-grow shadow-xl p-4 rounded-lg flex flex-col ">
            <h3 className="text-xl font-medium inline-flex gap-2 items-center">
              <GoPrimitiveDot className="text-secondary" /> Todo
            </h3>
            <div className="divider bg-secondary h-1"></div>
            <div className="flex-grow overflow-y-auto flex flex-col gap-3  max-h-96">
              <Task />
            </div>
            <div className="p-4">
              <button className="btn btn-lg btn-outline w-full ">
                <MdAdd />
              </button>
            </div>
          </div>
          <div className="flex-grow shadow-xl p-4 rounded-lg flex flex-col">
            <h3 className="text-xl font-medium inline-flex gap-2 items-center">
              <GoPrimitiveDot className="text-accent" /> On Progress
            </h3>
            <div className="divider bg-accent h-1"></div>
            <div className="flex-grow overflow-y-auto flex flex-col gap-3  max-h-96">
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
            <div className="p-4">
              <button className="btn btn-lg btn-outline w-full ">
                <MdAdd />
              </button>
            </div>
          </div>
          <div className="flex-grow shadow-xl p-4 rounded-lg flex flex-col">
            <h3 className="text-xl font-medium inline-flex gap-2 items-center">
              <GoPrimitiveDot className="text-success" /> Done
            </h3>
            <div className="divider bg-success h-1"></div>{" "}
            <div className="flex-grow overflow-y-auto flex flex-col gap-3  max-h-96">
              <Task />
              <Task />
              <Task />
            </div>
            <div className="p-4">
              <button className="btn btn-lg btn-outline w-full ">
                <MdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
