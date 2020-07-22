import $ from "jquery"

export default {
    getAllEmployees: function () {
        return $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json'
        });
    }
};