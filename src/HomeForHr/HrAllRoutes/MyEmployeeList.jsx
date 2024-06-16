const MyEmployeeList = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Myy employee list</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th><button className="btn">Remove</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEmployeeList;
