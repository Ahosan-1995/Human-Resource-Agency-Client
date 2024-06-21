import { useContext } from "react";

import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "../SharedComponents/SocialLogin";
import { Helmet } from "react-helmet-async";

const LoginEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  const { signIn } = useContext(AuthContext);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };



  return (
    <div>
      <Helmet>
        <title>Human Agency | login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="bg-cover h-[300px] rounded-2xl lg:block lg:w-2/3 bg-[url('https://i.ibb.co/SRZZCL4/Bg-for-login.jpg')]">
              <div className="flex items-center h-full px-20">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Login Now
                  </h2>

                  <p className="max-w-xl mt-3 text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    autem ipsa, nulla laboriosam dolores, repellendus
                    perferendis libero suscipit nam temporibus molestiae
                  </p>
                </div>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
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
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className=" text-white btn bg-[#6292a6]">
                    Login
                  </button>

            
                  <div className="flex">
                     <SocialLogin></SocialLogin>
                    </div>
               
        

                  <div className="text-center mb-5 mt-5 flex flex-col">
                    <p>Do not have an account please </p>
                    <NavLink to="/registerHr">
                      <span className="font-bold">Register as an HR</span>
                    </NavLink>
                    <NavLink to="/registerEmp">
                      <span className="font-bold">Register as an employee</span>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployee;
