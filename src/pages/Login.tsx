import React from "react";
// @ts-ignore
import HeaderImage from "../assets/images/pana.png";
import { useForm } from "react-hook-form";
import { ILoginBody } from "../utils/Types";
import { ILoginRes } from "./../utils/Types";
import { login } from "./../utils/ApiCalls";

type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    const loginData = await login(data);
    console.log("loginData", loginData);
  };

  return (
    <div className="bg-[#044C7F] flex-grow pt-10 artboard">
      <div className="w-full min-h-screen hero ">
        <div className="flex-col gap-5 hero-content lg:flex-row ">
          <img alt="Login" src={HeaderImage} className="rounded-lg min-w-sm " />

          <div className="flex-shrink-0 w-full max-w-md shadow-2xl card bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-semibold card-title">Login</h1>
              <div className="w-16 h-1 mb-3 bg-base-content"></div>
              <p>Welcome to Jobzella! 👋🏻</p>
              <p>Please sign-in to your account and start the adventure</p>
              <br />
              {/* login form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="mt-6 form-control">
                  <button type="submit" className="btn bg-[#00587A] ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
