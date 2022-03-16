import moment from "moment";

const dateCheck = (startdate, enddate, refil) => {
  const refilDate = moment(refil, "MM/DD/YY");
  const a = moment(refilDate).isBetween(startdate, enddate);
  return a;
};

export default dateCheck;
