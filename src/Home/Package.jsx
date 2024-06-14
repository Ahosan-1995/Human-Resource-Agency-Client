import { FaShoppingBag } from "react-icons/fa";


const Package = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10 bg-b">
            <h1 className="text-7xl font-bold">Our Packages</h1>
            <div className="flex gap-x-10">
                <div className="flex flex-col justify-center items-center gap-y-2 mt-10 bg-gray-200 p-10 rounded-lg">
                    <FaShoppingBag className="text-5xl text-slate-600"></FaShoppingBag>
                    <p className="text-xl font-semibold">Basic Package: $ 5.00</p>
                    <p className="text-center">With this package you will <br /> be able to manage 5 employees</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 mt-10 bg-gray-200 p-10 rounded-lg">
                    <FaShoppingBag className="text-5xl text-slate-600"></FaShoppingBag>
                    <p className="text-xl font-semibold">Basic Package: $ 8.00</p>
                    <p className="text-center">With this package you will <br /> be able to manage 8 employees</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 mt-10 bg-gray-200 p-10 rounded-lg">
                    <FaShoppingBag className="text-5xl text-slate-600"></FaShoppingBag>
                    <p className="text-xl font-semibold">Basic Package: $ 15.00</p>
                    <p className="text-center">With this package you will <br /> be able to manage 15 employees</p>
                </div>
            </div>
        </div>
    );
};

export default Package;