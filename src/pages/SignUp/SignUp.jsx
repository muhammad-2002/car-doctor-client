import React, { useContext } from "react";
import { Link } from "react-router-dom";
import frame from "../../../public/Frame (1).png";
import { AuthContext } from "../../Provider/Provider";

const SignUp = () => {
  const { createWithEmailAndPassword } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createWithEmailAndPassword(email, password)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="w">
              <img className="w-[80%]" src={frame}></img>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn bg-[#FF3811] text-white " />
              </div>
            </form>
            <p className="pl-9">
              Alrady have an Account?
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
