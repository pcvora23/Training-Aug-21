"use strict";
exports.__esModule = true;
exports.Vacancy = void 0;
var Vacancy = /** @class */ (function () {
    function Vacancy(id, name, position, experience) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.experience = experience;
    }
    Vacancy.prototype.addVacancy = function (vacancyarr) {
        var vacancylist = new Vacancy(this.id, this.name, this.position, this.experience);
        vacancyarr.push(vacancylist);
    };
    return Vacancy;
}());
exports.Vacancy = Vacancy;
