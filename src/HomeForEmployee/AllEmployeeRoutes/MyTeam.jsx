import { Helmet } from "react-helmet-async";

const MyTeam = () => {
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
            <tr>
              <th>Sl</th>
              <th>Image of the member</th>
              <th>Name of the member</th>
              <th>Member type</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
