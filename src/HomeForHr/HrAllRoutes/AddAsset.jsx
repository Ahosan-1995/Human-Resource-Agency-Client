




const AddAsset = () => {

    
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Add New Asset</h2>
      <form>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Type</span>
          </label>
          <input
            type="text"
            placeholder="Product Type"
            name="type"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Product Quantity"
            name="quantity"
            className="input input-bordered"
            required
          />
        </div>
        <button className=" text-white rounded-lg m-4 h-10 mx-auto w-full bg-[#6292a6]">Add</button>
      </form>
    </div>
  );
};

export default AddAsset;
