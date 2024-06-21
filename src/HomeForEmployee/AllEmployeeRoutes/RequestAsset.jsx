import { Helmet } from "react-helmet-async";
import OnlyAssetsReload from "../../Hooks/OnlyAssetsReload";
import OnlyUsersReload from "../../Hooks/OnlyUsersReload";

const RequestAsset = () => {
  const [allAssets, loading, refetch] = OnlyAssetsReload();
  console.log(allAssets);

  const [allUsers] = OnlyUsersReload();
  console.log(allUsers);

  return (
    <div>
      <Helmet>
        <title>Human Agency | Employee-Request-Asset</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        This is employee request an asset page
      </h2>
      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Asset name</th>
              <th>Asset type</th>
              <th>Availability</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {allAssets.map((asset) => (
              <tr key={asset._id}>
                <th>{asset.productName}</th>
                <th>{asset.productType}</th>
                <th>{asset.quantity == 0 ? "Out Of stock" : "available"}</th>
                <th>
                  {asset.quantity == 0 ? <button disabled className="btn">Request</button> : <button className="btn">Request</button>}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAsset;
