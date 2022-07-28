import React from "react";
// @ts-ignore
import emoji from "../assets/images/emoji.svg";
import { MdSearch, MdNotifications } from "react-icons/md";

type Props = {
  name?: string;
};

const HomeHeader = ({ name }: Props) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 p-2 shadow-lg md:p-7">
      <div className="flex gap-4">
        <div className="w-12">
          <img src={emoji} alt="emoji" />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold">Hello, {name}</h3>
          <p>Let’s start your tasks now!</p>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <MdSearch className="text-2xl" />
        <MdNotifications className="text-2xl" />
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
