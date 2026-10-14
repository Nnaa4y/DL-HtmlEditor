"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexLineCount = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexLineCount extends CSSProperty_ts_1.CSSProperty {
    _name = 'flex-line-count';
    Value = 0.0;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value.toString());
    toString = () => this.toCSSProperty();
}
exports.FlexLineCount = FlexLineCount;
