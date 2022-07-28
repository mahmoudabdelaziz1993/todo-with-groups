import React from "react";
import { MdSave, MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";

type Props = {};

const AddGroup = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="modal modal-bottom sm:modal-middle" id="add-group">
      <div className="modal-box">
        <div className="flex items-center justify-between ">
          <h3 className="text-lg font-bold capitalize">Add Group</h3>
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
                name <strong className="text-error">*</strong>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full max-w-md input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
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

export default AddGroup;
