import axios from "axios";

export const apiCall = () => {
  const token = localStorage.getItem("token");

  axios.create({
    baseURL: "DeployedApiURL",
    headers: {
      Authorization: token
    }
  });
};
