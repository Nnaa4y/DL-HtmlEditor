"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
const FlexShrink_ts_1 = require("./FlexShrink.js");
const FlexGrow_ts_1 = require("./FlexGrow.js");
const FlexBasis_ts_1 = require("./FlexBasis.js");
class Flex extends CSSProperty_ts_1.CSSProperty {
    static None;
    static MaxContent = '1 1 max-content';
    static MinContent = '1 1 min-content';
    static FitContent = '1 1 fit-content';
    static Content = '1 1 content';
    _name = 'flex';
    Value__Flex_Grow;
    Value__Flex_Shrink;
    Value__Flex_Basis;
    constructor(flex_grow, flex_shrink, flex_basis) {
        super();
        this.Value__Flex_Grow = flex_grow;
        this.Value__Flex_Shrink = flex_shrink;
        this.Value__Flex_Basis = flex_basis;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, `${this.Value__Flex_Grow.Value} ${this.Value__Flex_Shrink.Value} ${this.Value__Flex_Basis.Value}`);
    toString = () => this.toCSSProperty();
}
exports.Flex = Flex;
let f = new Flex(new FlexGrow_ts_1.FlexGrow(1.0), new FlexShrink_ts_1.FlexShrink(1.5), new FlexBasis_ts_1.FlexBasis(FlexBasis_ts_1.FlexBasis.MaxContent));
console.log(f.toCSSProperty());
