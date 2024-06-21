import { useState } from "react";
import Select from "react-dropdown-select";
import UseAssets from "../../Hooks/UseAssets";


const AssetList = () => {
  const options = [
    {
      value: 1,
      label: "Available",
    },
    {
      value: 2,
      label: "Out od stock",
    },
    {
      value: 3,
      label: "Returnable",
    },
    {
      value: 4,
      label: "Non-Returnable",
    },
  ];

  const [value, setValues] = useState();
  console.log(value?.[0]?.label);

  const [assets,refetch]=UseAssets();
  console.log(assets);


  return (
    <div>
      <div className="flex justify-between">
        <div className="rounded-lg text-black outline flex">
          <input className="h-12 " type="text" />
          <button className="btn ">Search</button>
        </div>

        <div>
          <Select
            options={options}
            onChange={(values) => setValues(values)}
          ></Select>
        </div>

        <div>
          <h2>For sort</h2>
        </div>
      </div>

      <div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Product name</th>
              <th>Product type</th>
              <th>Product quantity</th>
              <th>Added date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              assets.map((asset,index)=><tr key={asset._id}>
                <th>{index+1}</th>
                <th>{asset.productName}</th>
                <th>{asset.quantity}</th>
                <th>{asset.date}</th>
                <th>{asset.date}</th>
                <th className="flex gap-2">
                  <button className="btn">Update</button>
                  <button className="btn">Delete</button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
