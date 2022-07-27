import React from "react";
// @ts-ignore
import emoji from "../assets/images/emoji.svg";
import { MdSearch, MdNotifications } from "react-icons/md";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <div className="flex shadow-lg justify-between p-7">
      <div className="flex gap-4">
        <div className="w-12">
          <img src={emoji} alt="emoji" />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold">Hello, Ahmed Muhammed</h3>
          <p>Let’s start your tasks NOW!</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <MdSearch className="text-2xl" />
        <MdNotifications className="text-2xl" />
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
