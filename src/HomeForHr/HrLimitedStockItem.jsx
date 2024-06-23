import OnlyAssetsReload from "../Hooks/OnlyAssetsReload";


const HrLimitedStockItem = () => {
  const [allAssets,loading,refetch]=OnlyAssetsReload();
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-5  mt-10">
        Limited stock item
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allAssets
              .filter((request) => request.quantity <= 10)
              .slice(0, 3)
              .map((request) => (
                <tr key={request._id}>
                  <td>{request.productName}</td>
                  <td>{request.productType}</td>
                  <td>{request.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrLimitedStockItem;
