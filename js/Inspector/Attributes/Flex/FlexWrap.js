"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexWrap = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexWrap extends CSSProperty_ts_1.CSSProperty {
    static NoWrap = 'nowrap';
    static Wrap = 'wrap';
    static Wrap_Reverse = 'wrap-reverse';
    static Balance = 'balance';
    static Wrap__Balance = 'wrap balance';
    static Balance__Wrap_Reverse = 'balance wrap-reverse';
    _name = 'flex-wrap';
    Value = CSSProperty_ts_1.CSSProperty.Unset;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value);
    toString = () => this.toCSSProperty();
}
exports.FlexWrap = FlexWrap;
