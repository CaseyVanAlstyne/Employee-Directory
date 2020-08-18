import axios from "axios";

export default {
  getAllEmployees: function (query) {
    return axios.get("https://randomuser.me/api/?results=10");
  },
};

export default API;
