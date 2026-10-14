"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexGrow = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexGrow extends CSSProperty_ts_1.CSSProperty {
    _name = 'flex-grow';
    Value = 0.0;
    constructor(val = 0.0) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value.toString());
    toString = () => this.toCSSProperty();
}
exports.FlexGrow = FlexGrow;
