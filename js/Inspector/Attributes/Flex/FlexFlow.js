"use strict";
// noinspection JSUnusedGlobalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexFlow = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexFlow extends CSSProperty_ts_1.CSSProperty {
    static Row = 'row';
    static Row_Reverse = 'row-reverse';
    static Column = 'column';
    static Column_Reverse = 'column-reverse';
    static NoWrap = 'nowrap';
    static Wrap = 'wrap';
    static Wrap_Reverse = 'wrap-reverse';
    static Wrap__Balance = 'wrap balance';
    static Balance__Wrap_Reverse = 'balance wrap-reverse';
    static Row__NoWrap = 'row nowrap';
    static Column__Wrap = 'column wrap';
    static Column_Reverse__Wrap_Reverse = 'column-reverse wrap-reverse';
    static Row_Reverse__Balance__Wrap = 'row-reverse balance wrap';
    _name = 'flex-flow';
    Value = CSSProperty_ts_1.CSSProperty.Unset;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value);
    toString = () => this.toCSSProperty();
}
exports.FlexFlow = FlexFlow;
