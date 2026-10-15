"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexBasis = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexBasis extends CSSProperty_ts_1.CSSProperty {
    static MaxContent = 'max-content';
    static MinContent = 'min-content';
    static FitContent = 'fit-content';
    static Content = 'content';
    _name = 'flex-basis';
    Value = CSSProperty_ts_1.CSSProperty.Unset;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value);
    toString = () => this.toCSSProperty();
}
exports.FlexBasis = FlexBasis;
