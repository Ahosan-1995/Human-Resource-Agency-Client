import { Helmet } from "react-helmet-async";





const ProfileHR_Employee = () => {

    const updateProfile=(e)=>{

    }

  return (
    <div>
      <Helmet>
        <title>Human Agency | Profile</title>
      </Helmet>
      <h2>This is hr and employee profile page</h2>
      <form onSubmit={updateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
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
            placeholder="Email"
            name="email"
            className="input input-bordered"
            readOnly
          />
        </div>
        <button className=" text-white btn bg-[#6292a6]">Update</button>
      </form>
    </div>
  );
};

export default ProfileHR_Employee;
