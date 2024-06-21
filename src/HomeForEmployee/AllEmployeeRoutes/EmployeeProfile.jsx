import { Helmet } from "react-helmet-async";

const EmployeeProfile = () => {
  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Profile</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee profile page
      </h2>
    </div>
  );
};

export default EmployeeProfile;
