




const AllRequest = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">All request</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Asset name</th>
              <th>Asset type</th>
              <th>Email of requester</th>
              <th>Name of requester</th>
              <th>Request date</th>
              <th>Note</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th>1</th>
              <th>Asset name</th>
              <th>Asset type</th>
              <th>Email of requester</th>
              <th>Name of requester</th>
              <th>Request date</th>
              <th>Note</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
