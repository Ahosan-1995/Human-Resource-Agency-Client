import MyExtraSection from "./MyExtraSection";
import MyMonthlyRequest from "./MyMonthlyRequest";
import MyPendingRequest from "./MyPendingRequest";


const EmployeeHome = () => {
    return (
        <div>
            <h1>This page is only for Employee Home page</h1>
            <MyPendingRequest></MyPendingRequest>
            <MyMonthlyRequest></MyMonthlyRequest>
            <MyExtraSection></MyExtraSection>

        </div>
    );
};

export default EmployeeHome;