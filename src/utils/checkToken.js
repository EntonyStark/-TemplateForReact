import moment from "moment";

export default () => {
  const doomed = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExp");
  };
  const token = localStorage.getItem("tokenExp");
  if (token === null) {
    doomed();
    return false;
  }
  const timeLife = moment(+token * 1000);
  const check = moment().isSameOrBefore(timeLife);
  if (check) return true;
  if (!check) {
    doomed();
    return false;
  }
};
