"use strict";
var _ = require('lodash');
var App = (function () {
    function App() {
        this.title = "SRepo";
    }
    App.prototype.getUsers = function () {
        return [{ name: "Sourabh" }];
    };
    return App;
}());
console.log(_.isArray(new App().getUsers()));
