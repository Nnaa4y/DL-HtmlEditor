"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridRow = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
const GridRowStart_ts_1 = require("./GridRowStart.js");
const GridRowEnd_ts_1 = require("./GridRowEnd.js");
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
    toCSSProperty = () => super.toCSSProperty(this._name, `${this.StartValue ? this.StartValue.toString() : '\b'} / ${this.EndValue ? this.EndValue.toString() : '\b'}`);
    toString = () => this.toCSSProperty();
}
exports.GridRow = GridRow;
let row = new GridRow(new GridRowStart_ts_1.GridRowStart(false, 2, 'a'), new GridRowEnd_ts_1.GridRowEnd(true, 1, 'b'));
console.log(row.toString());
