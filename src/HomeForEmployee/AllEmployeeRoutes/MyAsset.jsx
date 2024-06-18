const MyAsset = () => {
  return (
    <div>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <th>Sl</th>
                <th>Asset name</th>
                <th>Asset type</th>
                <th>Request date</th>
                <th>Approval date</th>
                <th>
                  <button className="btn">Remove</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAsset;
