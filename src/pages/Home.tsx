import React, { useEffect, useState } from "react";

// @ts-ignore
import logo from "../assets/images/logo.svg";
import HomeHeader from "../components/HomeHeader";
import { getAllTasks } from "./../utils/ApiCalls";
import { Employee, Itask } from "../utils/Types";
import GroupList from "../components/GroupList";
import PreviewTasks from "../components/PreviewTasks";
import AddTask from "../components/AddTask";
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
      setSelected(Tasks[0].id);
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
        <AddTask setTVlidate={setTVlidate} Selected={Selected} />
      </div>
    </div>
  );
};

export default Home;
