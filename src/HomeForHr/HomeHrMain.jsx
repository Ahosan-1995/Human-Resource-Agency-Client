import { Helmet } from "react-helmet-async";
import HrExtraSection1 from "./HrExtraSection1";
import HrExtraSection2 from "./HrExtraSection2";
import HrLimitedStockItem from "./HrLimitedStockItem";
import HrPendingRequest from "./HrPendingRequest";
import HrPiceChart from "./HrPiceChart";
import HrTopMostRequest from "./HrTopMostRequest";

const HomeHrMain = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Human Agency | HR-Home</title>
      </Helmet>
      <HrPendingRequest></HrPendingRequest>
      <HrTopMostRequest></HrTopMostRequest>
      <HrLimitedStockItem></HrLimitedStockItem>
      <HrPiceChart></HrPiceChart>
      <HrExtraSection1></HrExtraSection1>
      <HrExtraSection2></HrExtraSection2>
    </div>
  );
};

export default HomeHrMain;
