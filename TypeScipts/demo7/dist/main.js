"use strict";
var App = (function () {
    function App() {
        this.title = "SRepo";
    }
    App.prototype.getUsers = function () {
        return [{ name: "Sourabh" }];
    };
    return App;
}());
