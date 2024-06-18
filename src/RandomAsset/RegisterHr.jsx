import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SharedComponents/SocialLogin";
import UseAxiosPublic from "../Provider/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterHr = () => {
  
  const axiosPublic = UseAxiosPublic();

  const {createUser,updateUserProfile}=useContext(AuthContext);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
        const loggedUser=result.user;
        // console.log(loggedUser);
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
            console.log('user profile info updated');
            navigate('/login');  //remove after post on database

// to do when create data base

            // const userInfo={
            //     name: data.name,
            //     email: data.email,

            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res=>{
            //     if(res.data.insertedId){
            //         console.log('user added to the database');
            //         reset();
            //         navigate('/');
            //     }
            // })



        })
        .catch(error=>{
            console.log(error);
        })
    })
};









  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-3/4 flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="md:flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered "
                    name="name"
                    // required
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered"
                    name="companyName"
                    // required
                    {...register("companyName", { required: true })}
                  />
                  {errors.companyName && <span>This field is required</span>}
                </div>
              </div>

              <div className="md:flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Logo</span>
                  </label>
                  <input
                    // {...register("name")}
                    type="text"
                    placeholder="photoURL"
                    className="input input-bordered"
                    name="photoURL"
                    // required
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    //   {...register("email")}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    // required
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
              </div>

              <div className="md:flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    //   {...register("password")}
                    type="date"
                    placeholder="Date of Birth"
                    className="input input-bordered"
                    name="dob"
                    // required
                    {...register("dob", { required: true })}
                  />
                  {errors.dob && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Select a package</span>
                  </label>
                  <input
                    //   {...register("password")}
                    type="text"
                    placeholder="Package"
                    className="input input-bordered"
                    name="package"
                    // required
                    // {...register("package", { required: true })}
                    {...register("package")}
                  />
                  {errors.package && <span>This field is required</span>}
                </div>
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  // required
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <div className="flex flex-col gap-2 mb-3 justify-center items-center content-center">
              <p className="text-center">
                <small>
                  Already have an account? <Link to="/login">Please Login</Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHr;
