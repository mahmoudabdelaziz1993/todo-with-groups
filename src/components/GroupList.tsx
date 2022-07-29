import React, { useEffect, useState } from "react";
import { FaSlackHash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { getAllGroups } from "../utils/ApiCalls";
import { Igroup } from "../utils/Types";
import AddGroup from "./AddGroup";

type Props = {
  id: string;
  setSelected: Function;
};

const GroupList = ({ id, setSelected }: Props) => {
  const [Groups, setGroups] = useState<Igroup[]>([]);
  const [Gvlidate, setGvlidate] = useState(null);

  useEffect(() => {
    const Load = async () => {
      const groups: Igroup[] = await getAllGroups();
      setGroups(groups);
    };
    Load();
  }, []);

  useEffect(() => {
    const Load = async () => {
      const groups: Igroup[] = await getAllGroups();
      setGroups(groups);
    };
    Load();
  }, [Gvlidate]);

  return (
    <>
      <ul className="w-56 gap-2 p-2 pt-12 menu rounded-box">
        {" "}
        <li className="uppercase menu-title">
          <span>Groups</span>
        </li>
        {Groups &&
          Groups.map((g: Igroup, i: number) => (
            <li key={i}>
              <a
                href="#!"
                onClick={() => setSelected(g.id)}
                className={g.id === id ? "active" : ""}
              >
                <FaSlackHash />
                {g.name}
              </a>
            </li>
          ))}
        <li>
          <a href="#add-group" className="btn btn-primary text-primary-content">
            <MdAdd />
            add group
          </a>
        </li>
      </ul>

      <AddGroup setGvlidate={setGvlidate} />
    </>
  );
};

export default GroupList;
