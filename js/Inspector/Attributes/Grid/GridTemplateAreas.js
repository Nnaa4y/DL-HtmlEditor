"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridTemplateAreas = void 0;
const CSSProperty_ts_1 = require("../../CSSProperty.js");
class GridTemplateAreas extends CSSProperty_ts_1.CSSProperty {
    _name = 'grid-template-areas';
    /*
    you will enter the name of areas

    example:               \
    [                      \
        [ 'a', 'a', 'a' ], \
        [ 'b', 'c', 'c' ], \
        [ 'b', 'c', '.' ]  \
    ]

    '.' for null areas
    */
    Areas;
    constructor(areas) {
        super();
        this.Areas = areas;
    }
    getValues() {
        return (() => {
            // join ' '  (inner list)
            // join '\n\t' (outer list)
            let tmp = '';
            let res = '';
            this.Areas.forEach((tmpAreas) => {
                res = res.concat('\n\t');
                tmp = tmp.concat('\"');
                tmpAreas.forEach((area) => tmp = tmp.concat(area, ' '));
                tmp = tmp.concat('\b\"');
                res = res.concat(tmp);
                tmp = '';
            });
            return res;
        })(); // unnamed action callback
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.getValues()); // toCSSProperty
    toString = () => this.toCSSProperty();
}
exports.GridTemplateAreas = GridTemplateAreas;
