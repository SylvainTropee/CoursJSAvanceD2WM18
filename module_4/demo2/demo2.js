var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, color) {
        this.brand = brand;
        this.color = color;
        this.nbWheel = 4;
    }
    Car.prototype.display = function () {
        console.log("La voiture est de la marque ".concat(this.brand, " et est ").concat(this.color));
    };
    return Car;
}());
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(color, model) {
        var _this = _super.call(this, "Ford", color) || this;
        _this.model = model;
        return _this;
    }
    Ford.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Le modele est ".concat(this.model));
    };
    return Ford;
}(Car));
var c = new Car("Dacia", "Blanche");
c.display();
var f = new Ford("Bleue", "Fiesta");
f.display();
