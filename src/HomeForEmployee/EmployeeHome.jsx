import { Helmet } from "react-helmet-async";
import MyExtraSection from "./MyExtraSection";
import MyMonthlyRequest from "./MyMonthlyRequest";
import MyPendingRequest from "./MyPendingRequest";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import OnlyUsersReload from "../Hooks/OnlyUsersReload";

const EmployeeHome = () => {
  const [allUsers, loading, refetch] = OnlyUsersReload();
  // console.log(allUsers);
  const { user } = useContext(AuthContext);

  const [filteredUsers, setFilteredUsers] = useState();

  const [associatedEmail, setassociatedEmail] = useState();

  useEffect(() => {
    if (allUsers.length > 0) {
      const filtered = allUsers.filter((user1) => user1.email === user?.email);
      setFilteredUsers(filtered);
    }
  }, [allUsers, user]);

  // console.log(filteredUsers);

  // const filteredUserAssociatedEmail=filteredUsers[0]?.associatedEmail;
  // console.log(filteredUserAssociatedEmail);

  useEffect(() => {
    const associatedEmail = filteredUsers?.[0]?.associatedEmail;

    setassociatedEmail(associatedEmail);
  }, [filteredUsers]);

  // console.log(associatedEmail);
  // console.log("habib");

  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Home</title>
      </Helmet>
      <h1>This page is only for Employee Home page</h1>

      <div>
        {associatedEmail == "" ? (
          "Kindly contact with HR"
        ) : (
          <div className="flex flex-col justify-center items-center gap-10">
            <MyPendingRequest></MyPendingRequest>
            <MyMonthlyRequest></MyMonthlyRequest>
            <MyExtraSection></MyExtraSection>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeHome;
