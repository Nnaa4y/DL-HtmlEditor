"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSProperty = void 0;
// base class for every CSS property
class CSSProperty {
    static Inherit = 'inherit';
    static Initial = 'initial';
    static Revert = 'revert';
    static Revert_Layer = 'revert-layer';
    static Unset = 'unset';
    // returns '${name}: ${value};'
    toCSSProperty(name, value) {
        return `${name}: ${value};`;
    }
}
exports.CSSProperty = CSSProperty;
