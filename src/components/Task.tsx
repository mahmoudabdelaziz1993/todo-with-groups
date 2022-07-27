import React from "react";
import { HiDotsHorizontal, HiClock } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import AvatarGroup from "./AvatarGroup";

type Props = {};

const Task = (props: Props) => {
  return (
    <div className="bg-base-200 shadow-md md:px-7 py-4 p-2 flex flex-col rounded-md ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold min-w-[200px]">UI/UX Design</h3>
        <HiDotsHorizontal />
      </div>
      <p>Brainstorming brings team members' diverse experience into play. </p>
      <div className="badge badge-outline badge-success gap-2 my-2">
        <HiClock /> 5 Days
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
