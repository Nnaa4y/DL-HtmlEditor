"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridRow = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridRow extends CSSProperty_ts_1.CSSProperty {
    static Auto = 'auto / auto';
    _name = 'grid-row';
    StartValue = null;
    EndValue = null;
    constructor(start, end) {
        super();
        this.StartValue = start;
        this.EndValue = end;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, `${this.StartValue ? this.StartValue.getValues() : '\b'} / ${this.EndValue ? this.EndValue.getValues() : '\b'}`);
    toString = () => this.toCSSProperty();
}
exports.GridRow = GridRow;
