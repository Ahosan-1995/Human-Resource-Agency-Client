import { useContext } from "react";
import OnlyRequestedAsset from "../Hooks/OnlyRequestedAsset";
import { AuthContext } from "../Provider/AuthProvider";

const MyMonthlyRequest = () => {
  const [requestedAssets, loading, refetch] = OnlyRequestedAsset();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-5  mt-10">
        Employee Monthly request
      </h1>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Name of asset</th>
            <th>Type of asset</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requestedAssets.map((asset) =>asset.requesterEmail===user?.email?
          
              <tr key={asset._id}>
                <th>{asset.productName}</th>
                <th>{asset.productType}</th>
                <th>{asset.status}</th>
              </tr>:
              ""
            
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyMonthlyRequest;
