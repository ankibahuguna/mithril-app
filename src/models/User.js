// src/models/User.js
var m = require("mithril")

class User {

    constructor () {
        this.list = [];
        this.current = {};
    }

    loadList () {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then((result)=> {
            this.list = result.data;
        })
    }

    load(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then((result)=> {
            this.current = result
        })
    }

    save() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + this.current.id,
            data: this.current,
            withCredentials: true,
        })
    }
}

module.exports = User