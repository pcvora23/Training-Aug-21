"use strict";
exports.__esModule = true;
exports.Interview = void 0;
var status;
(function (status) {
    status[status["done"] = 0] = "done";
    status[status["pending"] = 1] = "pending";
})(status || (status = {}));
var Interview = /** @class */ (function () {
    function Interview(interviewerId, vacId, vacName, vacNumber, vacQualification, interviewstatus) {
        this.interviewerId = interviewerId;
        this.vacId = vacId;
        this.vacName = vacName;
        this.vacNumber = vacNumber;
        this.vacQualification = vacQualification;
        this.interviewstatus = interviewstatus;
    }
    Interview.prototype.addInterview = function (intarr) {
        var interviewlist = new Interview(this.interviewerId, this.vacId, this.vacName, this.vacNumber, this.vacQualification, this.interviewstatus);
        intarr.push(interviewlist);
    };
    return Interview;
}());
exports.Interview = Interview;
