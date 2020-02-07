import axios from "axios";

export const apiCall = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://gigapetdb.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
