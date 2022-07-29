import React, { useEffect, useState } from "react";

// @ts-ignore
import logo from "../assets/images/logo.svg";
import HomeHeader from "../components/HomeHeader";
import { getAllTasks } from "./../utils/ApiCalls";
import { Employee, Itask } from "../utils/Types";
import GroupList from "../components/GroupList";
import PreviewTasks from "../components/PreviewTasks";
type Props = {};

const Home = (props: Props) => {
  const [Tasks, setTasks] = useState<Itask[]>([]);
  const [User, setUser] = useState<Employee>();
  const [Selected, setSelected] = useState<string>("");
  const [TVlidate, setTVlidate] = useState(null);
  // load Groups and tasks
  useEffect(() => {
    const Load = async () => {
      const tasks: Itask[] = await getAllTasks();
      let user = localStorage.getItem("UserDTA");
      setTasks(tasks);
      setSelected(Tasks[0]?.id || "1");
      setUser(JSON.parse(user!));
    };
    Load();
  }, []);

  useEffect(() => {
    const load = async () => {
      const tasks: Itask[] = await getAllTasks();
      setTasks(tasks);
    };
    load();
  }, [TVlidate]);

  return (
    <div className="flex flex-col flex-grow artboard sm:flex-row">
      {/* Left side */}
      <div className="max-w-md pt-8 bg-base-200 px-14">
        {/* Logo */}
        <div className="cursor-not-allowed ">
          <img src={logo} alt="" className="image-full" />
        </div>
        {/* nav */}
        <GroupList id={Selected} setSelected={setSelected} />
      </div>
      {/* right side */}
      <div className="flex flex-col flex-wrap flex-grow gap-2">
        <HomeHeader name={User?.name} />
        {/* sub Header */}
        <PreviewTasks
          Tasks={Tasks.filter(
            (task, i) => task.group_id?.toString() === Selected
          )}
          setTVlidate={setTVlidate}
        />
        {/* <div className="flex flex-wrap justify-between gap-2 p-2 md:px-14 md:py-7">
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
      </div>
    </div>
  );
};

export default Home;
