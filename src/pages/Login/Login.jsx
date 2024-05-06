import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import frame from "../../../public/Frame (1).png";
import { AuthContext } from "../../Provider/Provider";
const Login = () => {
  const { signUpForEmailAndPass } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email };
    signUpForEmailAndPass(email, password)
      .then(() => {
        // console.log(result);
      })
      .catch();
  };
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="w">
              <img className="w-[80%]" src={frame}></img>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Submit"
                  className="btn bg-[#FF3811] text-white "
                ></input>
              </div>
            </form>
            <p className="pl-9">
              Alrady have an Account?
              <Link className="underline" to="/signUp">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
