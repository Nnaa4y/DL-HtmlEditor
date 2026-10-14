"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexShrink = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class FlexShrink extends CSSProperty_ts_1.CSSProperty {
    // no need to use separate variables
    // flex-shrink uses value ranged between 0 and 2
    _name = 'flex-shrink';
    Value = 0.0;
    constructor(val) {
        super();
        this.Value = val;
    }
    // don't care if this.Value is greater than 2 or less than 0
    toCSSProperty() {
        return super.toCSSProperty(this._name, this.Value.toString());
    }
    toString() {
        return this.toCSSProperty();
    }
}
exports.FlexShrink = FlexShrink;
