import axios from "axios";

export default {
    getAllEmployees: function (query) {
        return axios.get(
            "https://randomuser.me/api/"
        );
    }
};

export default API;