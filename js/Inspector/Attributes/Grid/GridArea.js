"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridArea = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridArea extends CSSProperty_ts_1.CSSProperty {
    static Auto = 'auto / auto / auto / auto';
    _name = 'grid-area';
    RowStartValue = null;
    ColumnStartValue = null;
    RowEndValue = null;
    ColumnEndValue = null;
    constructor(row_start, column_start, row_end, column_end) {
        super();
        this.RowStartValue = row_start;
        this.ColumnStartValue = column_start;
        this.RowEndValue = row_end;
        this.ColumnEndValue = column_end;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, `${this.RowStartValue.getValues()} ` + `/ ` +
        `${this.ColumnStartValue.getValues()} ` + `/ ` +
        `${this.RowEndValue.getValues()} ` + `/ ` +
        `${this.ColumnEndValue.getValues()}`);
    toString = () => this.toCSSProperty();
}
exports.GridArea = GridArea;
