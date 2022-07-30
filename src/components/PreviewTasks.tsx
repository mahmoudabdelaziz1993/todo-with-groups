import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { MdAdd, MdStar } from "react-icons/md";
import Task from "./Task";
import { Itask } from "./../utils/Types";

type Props = {
  Tasks: Itask[];
  setTVlidate: Function;
};

const PreviewTasks = ({ Tasks, setTVlidate }: Props) => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-2 p-2 md:px-14 md:py-7">
        <div className="flex items-end gap-4">
          <div className="">
            <h3 className="text-lg font-medium">
              Task Meter {Tasks.length}/50
            </h3>
            <progress
              className="w-56 progress progress-primary"
              value={Tasks.length}
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
      {/* sections */}
      <div className="flex flex-wrap flex-grow gap-4 p-2 md:p-7 lg:flex-nowrap">
        <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl bs basis-1/3 ">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium">
            <GoPrimitiveDot className="text-secondary" /> Todo
          </h3>
          <div className="h-1 divider bg-secondary"></div>
          <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
            {Tasks &&
              Tasks.filter((t, i) => t.status === "1").map((t, i) => (
                <Task setTVlidate={setTVlidate} key={t.id} task={t} />
              ))}
          </div>
          <div className="p-4">
            <a href={"#add-task"} className="w-full btn btn-lg btn-outline ">
              <MdAdd />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl bs basis-1/3">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium">
            <GoPrimitiveDot className="text-accent" /> On Progress
          </h3>
          <div className="h-1 divider bg-accent"></div>
          <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
            {Tasks &&
              Tasks.filter((t, i) => t.status === "2").map((t, i) => (
                <Task setTVlidate={setTVlidate} key={t.id} task={t} />
              ))}
          </div>
          <div className="p-4">
            <a href={"#add-task"} className="w-full btn btn-lg btn-outline ">
              <MdAdd />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4 rounded-lg shadow-xl bs basis-1/3">
          <h3 className="inline-flex items-center gap-2 text-xl font-medium">
            <GoPrimitiveDot className="text-success" /> Done
          </h3>
          <div className="h-1 divider bg-success"></div>{" "}
          <div className="flex flex-col flex-grow gap-3 overflow-y-auto max-h-96">
            {Tasks &&
              Tasks.filter((t, i) => t.status === "3").map((t, i) => (
                <Task setTVlidate={setTVlidate} key={t.id} task={t} />
              ))}
          </div>
          <div className="p-4">
            <a href={"#add-task"} className="w-full btn btn-lg btn-outline ">
              <MdAdd />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewTasks;
