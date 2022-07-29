import React from "react";
import { HiDotsHorizontal, HiClock } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import AvatarGroup from "./AvatarGroup";
import { Itask } from "../utils/Types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { editTaskStatus } from "../utils/ApiCalls";

type Props = {
  task: Itask;
  setTVlidate: Function;
};

const Task = ({ task, setTVlidate }: Props) => {
  dayjs.extend(relativeTime);

  const changestatus = async (status: string, id: string) => {
    const res: Itask = await editTaskStatus(status, id);
    // const data = await res.json();
    setTVlidate(res.id);
  };
  return (
    <div className="flex flex-col p-2 py-4 rounded-md shadow-md bg-base-200 md:px-7 ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold min-w-[200px]">{task.title}</h3>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1 btn btn-circle btn-link">
            <HiDotsHorizontal />
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow dropdown-content menu bg-base-300 rounded-box w-52"
          >
            <li>
              <button className="" onClick={() => changestatus("1", task.id)}>
                Todo
              </button>
            </li>
            <li>
              <button className="" onClick={() => changestatus("2", task.id)}>
                On Progress
              </button>
            </li>
            <li>
              <button className="" onClick={() => changestatus("3", task.id)}>
                done
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p>{task.description} </p>
      <div className="gap-2 p-3 my-2 badge badge-outline badge-success badge-md">
        <HiClock /> {dayjs(task.createdAt).fromNow()}
      </div>
      <div className="flex justify-between py-2">
        <AvatarGroup />
        <p>
          <AiOutlineFileText /> 0 Files
        </p>
      </div>
    </div>
  );
};

export default Task;
