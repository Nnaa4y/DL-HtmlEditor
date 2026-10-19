"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridTemplateColumns = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
// read about grid-template-columns from 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-rows'
class GridTemplateColumns extends CSSProperty_ts_1.CSSProperty {
    static None = 'none';
    LengthValue = null; // 50px, 10cm, etc.
    FlexValue = null; // without 'fr'
    MinMaxValue = null;
    FitContentValue = null;
    RepeatValue = null;
    IsSubgrid = false;
    _name = 'grid-template-columns';
    /*
    I don't get how [line-name$] is used
    as I read from MDN, it means I can use line names but what the heck is that.
    I won't be using that thingy
    */
    makeMinMax(v1, v2) { return `minmax(${v1}, ${v2})`; }
    makeFitContent(v1, v2) { return `fit-content(${v1}, ${v2})`; }
    makeRepeat(v1, v2) { return `repeat(${v1} ${v2 ? `, ${v2}` : '\b'})`; }
    constructor(length, flex, minmax, fit_content, repeat, is_subgrid) {
        super();
        if (length)
            this.LengthValue = length;
        if (flex)
            this.FlexValue = flex.replaceAll('fr', '');
        if (minmax) {
            let pieces = minmax.split(',').toSpliced(2);
            for (let i = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();
            this.MinMaxValue = this.makeMinMax(pieces[0], pieces[1]);
        }
        if (fit_content) {
            let pieces = fit_content.split(',').toSpliced(2);
            for (let i = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();
            this.FitContentValue = this.makeMinMax(pieces[0], pieces[1]);
        }
        if (repeat) {
            // aValue bValue
            let pieces = repeat.split(',').toSpliced(2);
            for (let i = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();
            if (pieces.length == 2)
                this.RepeatValue = this.makeRepeat(pieces[0], pieces[1]);
            else
                this.RepeatValue = this.makeRepeat(pieces[0], null);
        }
        this.IsSubgrid = is_subgrid;
    }
    getValues() {
        return (this.IsSubgrid ?
            'subgrid'
            :
                `${this.LengthValue ? this.LengthValue : '\b'} ` +
                    `${this.FlexValue ? this.FlexValue.toString() + 'fr' : '\b'} ` +
                    `${this.MinMaxValue ? this.MinMaxValue : '\b'} ` +
                    `${this.FitContentValue ? this.FitContentValue : '\b'} ` +
                    `${this.RepeatValue ? this.RepeatValue : '\b'}`);
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.getValues());
    toString = () => this.toCSSProperty();
}
exports.GridTemplateColumns = GridTemplateColumns;
