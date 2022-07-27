import React from "react";
// @ts-ignore
import HeaderImage from "../assets/images/pana.png";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#044C7F] flex-grow pt-10 artboard">
      <div className="hero min-h-screen w-full ">
        <div className="hero-content flex-col lg:flex-row gap-5 ">
          <img alt="Login" src={HeaderImage} className="min-w-sm rounded-lg " />

          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="card-title  text-3xl font-semibold">Login</h1>
              <div className="h-1 w-16 mb-3 bg-base-content"></div>
              <p>Welcome to Jobzella! 👋🏻</p>
              <p>Please sign-in to your account and start the adventure</p>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#00587A] ">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
