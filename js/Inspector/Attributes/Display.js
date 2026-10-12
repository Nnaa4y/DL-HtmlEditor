"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
exports.displayToCssProperty = displayToCssProperty;
exports.Display = {
    //# region no paired
    //
    None: 'none',
    Contents: 'contents',
    Flow_Root: 'flow-root',
    Inline_Block: 'inline-block',
    //# endregion
    List_Item: 'list-item',
    Flex: '       flex',
    Inline_Flex: 'inline-flex',
    Grid: '       grid',
    Inline_Grid: 'inline-grid',
    Grid_Lanes: '       grid-lanes',
    Inline_Grid_Lanes: 'inline-grid-lanes',
    Table: '       table',
    Inline_Table: 'inline-table',
    //# region Block * -- (does not contain 'block-*', contain 'block *')
    //
    Block: 'block',
    Block__Flow__List_Item: 'block flow list-item',
    Block__Flex: 'block flex',
    Block__Grid: 'block grid',
    Block__Grid_Lanes: 'block grid-lanes',
    Block__Table: 'block table',
    Block__Flow: 'block flow',
    Block__Flow_Root: 'block flow-root',
    //# endregion
    //# region Inline * -- (does not contain 'inline-*', contain 'inline *')
    //
    Inline: 'inline',
    Inline__List_Item: 'inline      list-item',
    Inline__Flow_List_Item: 'inline flow list-item',
    Inline__Flex: 'inline flex',
    Inline__Grid: 'inline grid',
    Inline__Grid_Lanes: 'inline grid-lanes',
    Inline__Table: 'inline table',
    Inline__Flow: 'inline flow',
    Inline__Flow_Root: 'inline flow-root',
    //# endregion
    //# region global values
    //
    Inherit: 'inherit',
    Initial: 'initial',
    Revert: 'revert',
    Revert_Layer: 'revert-layer',
    Unset: 'unset',
    //# endregion
};
// display: ${something}
function displayToCssProperty(d) { return `display: ${d.toString()}`; }
