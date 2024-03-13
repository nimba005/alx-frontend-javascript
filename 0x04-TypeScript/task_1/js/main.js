"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentClass = exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) {
  return "".concat(firstName[0], ".").cancat(lastName);
};
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
  function StudentClass(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  StudentClass.prototype.workOnHomework = function () {
    return 'Currently working';
  };
  StudentClass.prototype.displayName = function () {
    return this.firstName;
  };
  return StudentClass;
}());
exports.studentClass = StudentClass;