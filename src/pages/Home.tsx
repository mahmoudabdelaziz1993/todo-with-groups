import React, { useEffect, useState } from "react";
import {
  MdDraw,
  MdOutlineCode,
  MdLoyalty,
  MdAdd,
  MdStar,
  MdClose,
} from "react-icons/md";
import { FaSlackHash } from "react-icons/fa";
// @ts-ignore
import logo from "../assets/images/logo.svg";
import HomeHeader from "../components/HomeHeader";
import { GoPrimitiveDot } from "react-icons/go";
import Task from "../components/Task";
import { getAllGroups } from "../utils/ApiCalls";
import { getAllTasks } from "./../utils/ApiCalls";
import { Igroup } from "../utils/Types";
import AddGroup from "../components/AddGroup";
import AddTask from "../components/AddTask";

type Props = {};

const Home = (props: Props) => {
  const [Groups, setGroups] = useState<Igroup[]>([]);
  const [Tasks, setTasks] = useState(null);

  // load Groups and tasks
  useEffect(() => {
    const Load = async () => {
      const groups: Igroup[] = await getAllGroups();
      const tasks = await getAllTasks();
      setGroups(groups);
      setTasks(tasks);
    };
    Load();
  }, []);

  return (
    <div className="flex flex-col flex-grow artboard sm:flex-row">
      {/* Left side */}
      <div className="max-w-md pt-8 bg-base-200 px-14">
        {/* Logo */}
        <div className="cursor-not-allowed ">
          <img src={logo} alt="" className="image-full" />
        </div>
        {/* nav */}
        <ul className="w-56 gap-2 p-2 pt-12 menu rounded-box">
          {" "}
          <li className="uppercase menu-title">
            <span>Groups</span>
          </li>
          {Groups &&
            Groups.map((g: Igroup, i: number) => (
              <li key={i}>
                <a href="#!">
                  <FaSlackHash />
                  {g.name}
                </a>
              </li>
            ))}
          <li>
            <a
              href="#add-group"
              className="btn btn-primary text-primary-content"
            >
              <MdAdd />
              add group
            </a>
          </li>
        </ul>

        <AddGroup />

        {/* add group */}
        {/* <input type="checkbox"  className="modal-toggle" /> */}
      </div>
      {/* right side */}
      <div className="flex flex-col flex-wrap flex-grow gap-2">
        <HomeHeader />
        {/* sub Header */}
        <div className="flex flex-wrap justify-between gap-2 p-2 md:px-14 md:py-7">
          <div className="flex items-end gap-4">
            <div className="">
              <h3 className="text-lg font-medium">Task Meter 25/50</h3>
              <progress
                className="w-56 progress progress-primary"
                value="25"
                max="50"
              ></progress>
            </div>
            <p className="inline-flex items-center gap-2 text-warning">
              <MdStar />
              Good Job!
            </p>
          </div>
          <a href="#add-task" className="gap-2 btn btn-primary">
            <MdAdd />
            Add Task
          </a>
        </div>
        <AddTask />
        {/* sections */}
        <div className="flex flex-wrap flex-grow gap-4 p-2 md:p-7 sm:flex-nowrap">
          <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl ">
            <h3 className="inline-flex items-center gap-2 text-xl font-medium">
              <GoPrimitiveDot className="text-secondary" /> Todo
            </h3>
            <div className="h-1 divider bg-secondary"></div>
            <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
              <Task />
            </div>
            <div className="p-4">
              <button className="w-full btn btn-lg btn-outline ">
                <MdAdd />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl">
            <h3 className="inline-flex items-center gap-2 text-xl font-medium">
              <GoPrimitiveDot className="text-accent" /> On Progress
            </h3>
            <div className="h-1 divider bg-accent"></div>
            <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
              <Task />
              <Task />
              <Task />
              <Task />
            </div>
            <div className="p-4">
              <button className="w-full btn btn-lg btn-outline ">
                <MdAdd />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl">
            <h3 className="inline-flex items-center gap-2 text-xl font-medium">
              <GoPrimitiveDot className="text-success" /> Done
            </h3>
            <div className="h-1 divider bg-success"></div>{" "}
            <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
              <Task />
              <Task />
              <Task />
            </div>
            <div className="p-4">
              <button className="w-full btn btn-lg btn-outline ">
                <MdAdd />
              </button>
            </div>
          </div>
        </div>

        <div className="modal" id="add-group">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
