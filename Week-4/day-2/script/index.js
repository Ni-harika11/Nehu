var User = /** @class */ (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    User.prototype.encryptPassword = function () {
        return "".concat(this.password, "abc");
    };
    return User;
}());
var val = new User('hello', "dnds", '2323');
console.log(val.encryptPassword());
