import { Helmet } from "react-helmet-async";
import OnlyAssetsReload from "../../Hooks/OnlyAssetsReload";
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";

const MyAsset = () => {
  const [allAssets, loading, refetch] = OnlyAssetsReload();
  console.log(allAssets);

  const [allUsers] = OnlyUsersReload();
  console.log(allUsers);

  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Asset</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee my asset page
      </h2>
      <div className="flex justify-between">
        <p>Search</p>
        <p>Filter</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-center">Asset List</p>

        <div>
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Asset name</th>
                <th>Asset type</th>
                <th>Request date</th>
                <th>Approval date</th>
                <th>Request status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAssets.map((asset,index) => (
                <tr key={asset._id}>
                  <th>{index+1}</th>
                  <th>{asset.productName}</th>
                  <th>{asset.productType}</th>
                  <th>{asset.date}</th>
                  <th>Request status</th>
                  <th>Approval date</th>
                  <th>
                    <button className="btn">Remove</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAsset;

{
  /* <tr>
  <th>Sl</th>
  <th>Asset name</th>
  <th>Asset type</th>
  <th>Request date</th>
  <th>Request status</th>
  <th>Approval date</th>
  <th>
    <button className="btn">Remove</button>
  </th>
</tr> */
}
