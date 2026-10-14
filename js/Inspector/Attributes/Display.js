"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const CSSProperty_ts_1 = require("../CSSProperty.js");
class Display extends CSSProperty_ts_1.CSSProperty {
    //#region static variables
    //#region unpaired
    static None = 'none';
    static Contents = 'contents';
    static Flow_Root = 'flow-root';
    static Inline_Block = 'inline-block';
    //#endregion
    static List_Item = 'list-item';
    static Flex = 'flex';
    static Inline_Flex = 'inline-flex';
    static Grid = 'grid';
    static Inline_Grid = 'inline-grid';
    static Grid_Lanes = 'grid-lanes';
    static Inline_Grid_Lanes = 'inline-grid-lanes';
    static Table = 'table';
    static Inline_Table = 'inline-table';
    //#region block -- contains 'block *' not 'block-*'
    static Block = 'block';
    static Block__Flow__List_Item = 'block flow list-item';
    static Block__Flex = 'block-flex';
    static Block__Grid = 'block grid';
    static Block__Grid_Lanes = 'block grid-lanes';
    static Block__Table = 'block table';
    static Block__Flow = 'block flow';
    static BlocK__Flow_Root = 'block flow-root';
    //#endregion
    //#region inline -- contains 'inline *' not 'inline-*'
    static Inline = 'inline';
    static Inline__List_Item = 'inline list-item';
    static Inline__Flow__List_Item = 'inline flow list-item';
    static Inline__Flex = 'inline flex';
    static Inline__Grid = 'inline grid';
    static Inline__Grid_Lanes = 'inline grid-lanes';
    static Inline__Table = 'inline table';
    static Inline__Flow = 'inline flow';
    static Inline__Flow_Root = 'inline flow-root';
    //#endregion
    //#endregion
    _name = 'display';
    Value = CSSProperty_ts_1.CSSProperty.Unset;
    constructor(val) {
        super();
        this.Value = val;
    }
    toCSSProperty = () => super.toCSSProperty(this._name, this.Value.toString());
    toString = () => this.toCSSProperty();
}
exports.Display = Display;
