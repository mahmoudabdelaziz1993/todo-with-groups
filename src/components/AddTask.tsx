import React from "react";
import { MdClose, MdSave } from "react-icons/md";
import { useForm } from "react-hook-form";
import { addNewTask } from "./../utils/ApiCalls";
import { Itask } from "../utils/Types";

type Props = {
  setTVlidate: Function;
  Selected: string;
};

const AddTask = ({ setTVlidate, Selected }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    // console.log("add task :", data);
    const res: Itask = await addNewTask({ ...data, group_id: Selected });
    setTVlidate(res.id);
    reset();
  };

  return (
    <div className="modal modal-bottom sm:modal-middle" id="add-task">
      <div className="modal-box">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-bold capitalize">Add Task</h3>
          {/* <div className="modal-action"> */}
          <a href="#!" className="gap-2 btn btn-circle btn-ghost">
            <MdClose />
          </a>
          {/* </div> */}
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="font-semibold capitalize label-text">
                {" "}
                title <strong className="text-error">*</strong>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full max-w-md input input-bordered"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <label className="label">
                <span className="label-text-alt text-error">Reqiered</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold capitalize label-text">
                Your description <strong className="text-error">*</strong>
              </span>
            </label>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="description"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <label className="label">
                <span className="label-text-alt text-error">Reqiered</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold capitalize label-text">
                Status <strong className="text-error">*</strong>
              </span>
            </label>
            <div className="inline-flex gap-3">
              <input
                type="radio"
                className="radio radio-secondary"
                value={"1"}
                {...register("status", {
                  required: true,
                })}
              />{" "}
              Todo
              <input
                type="radio"
                value="2"
                className="radio radio-accent"
                {...register("status", {
                  required: true,
                })}
              />
              On Progress
              <input
                type="radio"
                value="3"
                className="radio radio-primary"
                {...register("status", {
                  required: true,
                })}
              />
              rer
            </div>

            {errors.description && (
              <label className="label">
                <span className="label-text-alt text-error">Reqiered</span>
              </label>
            )}
          </div>

          <div className="modal-action">
            <button type="submit" className="gap-2 btn btn-primary ">
              <MdSave /> save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
