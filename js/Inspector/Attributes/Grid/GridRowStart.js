"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridRowStart = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridRowStart extends CSSProperty_ts_1.CSSProperty {
    static Auto = 'auto';
    _name = 'grid-row-start';
    IntegerValue = null;
    CustomIdent = null;
    IsSpan = false;
    constructor(is_span, integer, ident) {
        super();
        this.IntegerValue = integer;
        this.CustomIdent = ident;
        this.IsSpan = is_span;
    }
    getValues = () => `${(this.IsSpan ? 'span' : '\b')} ` +
        `${this.CustomIdent ? this.CustomIdent : '\b'} ` +
        `${this.IntegerValue ? this.IntegerValue : '\b'}`;
    toCSSProperty = () => super.toCSSProperty(this._name, this.getValues());
    toString = () => this.toCSSProperty();
}
exports.GridRowStart = GridRowStart;
