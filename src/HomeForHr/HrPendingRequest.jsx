import OnlyRequestedAsset from "../Hooks/OnlyRequestedAsset";

const HrPendingRequest = () => {
  const [requestedAssets, loading, refetch] = OnlyRequestedAsset();
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-5  mt-10">
        Pending Request
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Request Status</th>
            </tr>
          </thead>
          <tbody>

            {requestedAssets
              .filter((request) => request.status === "pending")
              .slice(0, 5)
              .map((request) => (
                <tr key={request._id}>
                  <td>{request.requesterName}</td>
                  <td>{request.requesterEmail}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrPendingRequest;
