"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexDirection = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexDirection extends CSSProperty_ts_1.CSSProperty {
    static Row = 'row';
    static Row_Reverse = 'row-reverse';
    static Column = 'column';
    static Column_Reverse = 'column-reverse';
    Name = 'flex-direction';
    Value = CSSProperty_ts_1.CSSProperty.Unset;
    constructor(value) {
        super();
        this.Value = value;
    }
    toCSSProperty() {
        return super.toCSSProperty(this.Name, this.Value);
    }
    toString() {
        return this.toCSSProperty();
    }
}
exports.FlexDirection = FlexDirection;
let d = new FlexDirection(FlexDirection.Row);
console.log(d.toString());
