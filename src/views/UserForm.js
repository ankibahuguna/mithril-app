// src/views/UserForm.js
var m = require("mithril")
var User = require("../models/User");

var userModel = new User();

module.exports = {
    oninit: function(vnode) {
        console.log(vnode);
        userModel.load(vnode.attrs.id)
    },
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault()
                    userModel.save()
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", function(value) {userModel.current.firstName = value}),
                value: userModel.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {userModel.current.lastName = value}),
                value: userModel.current.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
}