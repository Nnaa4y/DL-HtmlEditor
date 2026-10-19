"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridAutoFlow = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridAutoFlow extends CSSProperty_ts_1.CSSProperty {
    static Row = 'row';
    static Column = 'column';
    static Dense = 'dense';
    static Row__Dense = 'row dense';
    static Column__Dense = 'column dense';
    _name = 'grid-auto-flow';
    Value;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value);
    toString = () => this.toCSSProperty();
}
exports.GridAutoFlow = GridAutoFlow;
