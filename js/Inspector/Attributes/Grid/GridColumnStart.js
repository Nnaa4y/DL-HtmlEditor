"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridColumnStart = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridColumnStart extends CSSProperty_ts_1.CSSProperty {
    static Auto = 'auto';
    _name = 'grid-column-start';
    IntegerValue = null;
    CustomIdent = null;
    IsSpan = false;
    constructor(is_span, integer, ident) {
        super();
        this.IntegerValue = integer;
        this.CustomIdent = ident;
        this.IsSpan = is_span;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, `${(this.IsSpan ? 'span' : '\b')} ` +
        `${this.CustomIdent ? this.CustomIdent : '\b'} ` +
        `${this.IntegerValue ? this.IntegerValue : '\b'}`);
    toString = () => this.toCSSProperty();
}
exports.GridColumnStart = GridColumnStart;
