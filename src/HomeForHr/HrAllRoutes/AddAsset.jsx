import { useForm } from "react-hook-form";

const AddAsset = () => {
  const currentDate = new Date().toLocaleDateString();
  console.log(currentDate);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    
    
  };

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
            name="productName"
            className="input input-bordered"
            {...register("productName", { required: true })}
          />
          {errors.productName && <span>This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Type</span>
          </label>
          <input
            type="text"
            placeholder="Product Type"
            name="productType"
            className="input input-bordered"
            {...register("productType", { required: true })}
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
            {...register("quantity", { required: true })}
          />
        </div>

        <div className="form-control">
          <input
            type="date"
            placeholder="Date"
            name="date"
            className="input input-bordered"
            {...register("date")}
            defaultValue={currentDate}
            hidden
          />
        </div>

        <button className=" text-white rounded-lg m-4 h-10 mx-auto w-full bg-[#6292a6]">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddAsset;
