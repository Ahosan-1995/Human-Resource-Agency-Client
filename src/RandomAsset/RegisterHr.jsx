import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../SharedComponents/SocialLogin";

const RegisterHr = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

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
            <form onSubmit={handleSubmit} className="card-body">
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
                    placeholder="logo"
                    className="input input-bordered"
                    name="logo"
                    // required
                    {...register("logo", { required: true })}
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
                    {...register("package", { required: true })}
                  />
                  {errors.dob && <span>This field is required</span>}
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
