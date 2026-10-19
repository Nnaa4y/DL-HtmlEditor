"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridAutoColumns = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridAutoColumns extends CSSProperty_ts_1.CSSProperty {
    _name = 'grid-auto-rows';
    static MinContent = 'min-content';
    static MaxContent = 'max-content';
    static Auto = 'auto';
    IntegerValue = null;
    PercentageValue = null; // '%'  removed
    FlexValue = null; // 'fr' removed
    MinMaxValue = null; // minmax($value, $value)
    FitContentValue = null; // fit-content($value)
    makeMinMax(v1, v2) { return `minmax(${v1}, ${v2})`; }
    makeFitContent(v1, v2) { return `fit-content(${v1}, ${v2})`; }
    constructor(int, per, flex, minmax, fit_content) {
        super();
        if (int)
            this.IntegerValue = int;
        if (per)
            this.PercentageValue = parseFloat(per.replaceAll('%', ''));
        if (flex)
            this.FlexValue = parseFloat(flex.replaceAll('%', ''));
        if (minmax) {
            let pieces = minmax.split(',').toSpliced(2);
            for (let index = 0; index < pieces.length; index++)
                pieces[index] = pieces[index].trim();
            this.MinMaxValue = this.makeMinMax(pieces[0], pieces[1]);
        }
        if (fit_content) {
            let pieces = fit_content.split(',').toSpliced(2);
            for (let index = 0; index < pieces.length; index++)
                pieces[index] = pieces[index].trim();
            this.FitContentValue = this.makeFitContent(pieces[0], pieces[1]);
        }
    }
    getValues() {
        return (`${this.IntegerValue ? this.IntegerValue : '\b'} ` +
            `${this.PercentageValue ? this.PercentageValue.toString() + '%' : '\b'} ` +
            `${this.FlexValue ? this.FlexValue.toString() + 'fr' : '\b'} ` +
            `${this.MinMaxValue ? this.MinMaxValue : '\b'} ` +
            `${this.FitContentValue ? this.FitContentValue : '\b'}`);
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.getValues());
    toString = () => this.toCSSProperty();
}
exports.GridAutoColumns = GridAutoColumns;
