"use strict";
// This project is aimed at developing a web-based and central Recruitment Process System for the HR Group for a company. Some features of this system will be creating vacancies, storing Applicants data, Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and finally Hiring of the applicant. Reports may be required to be generated for the use of HR group.
exports.__esModule = true;
exports.displayVacancy = void 0;
var vacancies = /** @class */ (function () {
    function vacancies(vacId, vacName, vacNumber, vacQualification) {
        this.vacId = vacId;
        this.vacName = vacName;
        this.vacNumber = vacNumber;
        this.vacQualification = vacQualification;
    }
    return vacancies;
}());
var vacancylist = [new vacancies(1, "QA", 21, "BSC"),
    new vacancies(2, "jr. software engineer", 5, 'BE'),
    new vacancies(3, "php developer", 5, 'ME'),
    new vacancies(2, "Magento developer", 3, 'MCA')];
function displayVacancy() {
    console.log(vacancylist);
}
exports.displayVacancy = displayVacancy;
// displayVacancy();
