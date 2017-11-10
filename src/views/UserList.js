// src/views/UserList.js
var m = require("mithril")
var User = require("../models/User");

var userModel = new User();
module.exports = {
    oninit: userModel.loadList.bind(userModel),
    view : function(){
        return m(".user-list",userModel.list.map(function(user){
            return m(".user-list-item",user.firstName+" "+user.lastName);
        }))
    }
}