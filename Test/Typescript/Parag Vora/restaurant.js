"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(ResId, ResName, ResAddress, Rescountry, Rescity, Resrating) {
        this.ResId = ResId;
        this.ResName = ResName;
        this.ResAddress = ResAddress;
        this.Rescountry = Rescountry;
        this.Rescity = Rescity;
        this.Resrating = Resrating;
    }
    Restaurant.prototype.addresData = function () {
        var res = new Restaurant(this.ResId, this.ResName, this.ResAddress, this.Rescountry, this.Rescity, this.Resrating);
        ResMap.set(this.ResId, res);
        ResArray.push(res);
    };
    Restaurant.getResById = function (ID) {
        if (ResMap.has(ID)) {
            console.log(ResMap.get(ID));
        }
        else {
            console.log('Restaurant not found');
        }
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
var ResMap = new Map();
var ResArray = [];
ResMap.clear();
