import axios from "axios";

export const SearchEmail = async(data) =>
  await axios.get(`http://report.uapp.uk/api/Student/list/${data}`);
