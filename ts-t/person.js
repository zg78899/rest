"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        console.log("hi " + this.name);
    };
    return Person;
}());
exports.default = Person;
var person = new Person('Lee');
