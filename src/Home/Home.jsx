import { Helmet } from "react-helmet-async";

import About from "./About";
import Package from "./Package";
import Slider from "./Slider";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import OnlyUsersReload from "../Hooks/OnlyUsersReload";

const Home = () => {
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
        <title>Human Agency | Home</title>
      </Helmet>

      <div>
        {associatedEmail == "" ? (
          "Kindly contact with HR"
        ) : (
          <div>
            <Slider></Slider>
            <About></About>
            <Package></Package>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
