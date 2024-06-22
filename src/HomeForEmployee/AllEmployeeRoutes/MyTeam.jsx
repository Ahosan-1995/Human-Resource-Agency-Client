import { Helmet } from "react-helmet-async";
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const MyTeam = () => {
  const [allUsers,loading,refetch]=OnlyUsersReload();

  const { user } = useContext(AuthContext);

  const userEmail=user.email;

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [filteredUserAssociatedEmail, setfilteredUserAssociatedEmail] = useState([]);

  useEffect(() => {
    if (allUsers.length > 0) {
      const filtered = allUsers.filter(user => user.email === userEmail);
      setFilteredUsers(filtered);
    }
  }, [allUsers,user]);

  // console.log(filteredUsers);

  // const filteredUserAssociatedEmail=filteredUsers[0]?.associatedEmail;
  // console.log(filteredUserAssociatedEmail);

  useEffect(() => {
    // Log filteredUsers whenever it changes
    console.log(filteredUsers);
  
    // Log filteredUserAssociatedEmail whenever it changes
    const filteredUserAssociatedEmail = filteredUsers[0]?.associatedEmail;
    setfilteredUserAssociatedEmail(filteredUserAssociatedEmail);
  }, [filteredUsers]);



  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Team</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee my team page
      </h2>
      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image of the member</th>
              <th>Name of the member</th>
              <th>Member type</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map((user,index)=>
              filteredUserAssociatedEmail==user.associatedEmail || filteredUserAssociatedEmail==user.email?
              <tr key={user._id}>
                <th>{index+1}</th>
                <th>
                    <img
                      className="w-10 rounded-full"
                      alt="Img"
                      src="https://i.ibb.co/ygVzCDL/128-1280406-view-user-icon-png-user-circle-icon-png.png"
                    />
                  </th>
                <th>{user.name}</th>
                <th>{user.role}</th>
              </tr>:
              ''
              
              
              )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
