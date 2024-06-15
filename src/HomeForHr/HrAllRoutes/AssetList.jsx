import { useState } from "react";
import Select from "react-dropdown-select";

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


  const [value, setValues]=useState();
  console.log(value?.[0]?.label);

  return (
    <div>
      <div className="rounded-lg text-black outline flex">
        <input className="h-12 " type="text" />
        <button className="btn ">Search</button>
      </div>



      <div>
        <Select options={options} onChange={(values) => setValues(values)}></Select>
      </div>

      <div>
        <h2>For sort</h2>
      </div>

      <div>

      </div>
    </div>
  );
};

export default AssetList;
