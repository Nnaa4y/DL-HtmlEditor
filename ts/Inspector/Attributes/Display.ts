import { CSSProperty } from "../CSSProperty.ts";

export class Display extends CSSProperty {
    //#region static variables

    //#region unpaired

    public static readonly None                    : string = 'none';

    public static readonly Contents                : string = 'contents';
    public static readonly Flow_Root               : string = 'flow-root';
    public static readonly Inline_Block            : string = 'inline-block';

    //#endregion


    public static readonly List_Item               : string = 'list-item';


    public static readonly Flex                    : string = 'flex';
    public static readonly Inline_Flex             : string = 'inline-flex';


    public static readonly Grid                    : string = 'grid';
    public static readonly Inline_Grid             : string = 'inline-grid';


    public static readonly Grid_Lanes              : string = 'grid-lanes';
    public static readonly Inline_Grid_Lanes       : string = 'inline-grid-lanes';


    public static readonly Table                   : string = 'table';
    public static readonly Inline_Table            : string = 'inline-table';


    //#region block -- contains 'block *' not 'block-*'

    public static readonly Block                   : string = 'block';

    public static readonly Block__Flow__List_Item  : string = 'block flow list-item';
    public static readonly Block__Flex             : string = 'block-flex';

    public static readonly Block__Grid             : string = 'block grid';
    public static readonly Block__Grid_Lanes       : string = 'block grid-lanes';

    public static readonly Block__Table            : string = 'block table';

    public static readonly Block__Flow             : string = 'block flow';
    public static readonly BlocK__Flow_Root        : string = 'block flow-root';

    //#endregion


    //#region inline -- contains 'inline *' not 'inline-*'

    public static readonly Inline                  : string = 'inline';

    public static readonly Inline__List_Item       : string = 'inline list-item';
    public static readonly Inline__Flow__List_Item : string = 'inline flow list-item';

    public static readonly Inline__Flex            : string = 'inline flex';

    public static readonly Inline__Grid            : string = 'inline grid';
    public static readonly Inline__Grid_Lanes      : string = 'inline grid-lanes';

    public static readonly Inline__Table           : string = 'inline table';

    public static readonly Inline__Flow            : string = 'inline flow';
    public static readonly Inline__Flow_Root       : string = 'inline flow-root';

    //#endregion

    //#endregion

    private readonly _name : string = 'display';
    public           Value : string = CSSProperty.Unset;

    public constructor(val: string) {
        super();

        this.Value = val;
    }


    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value.toString());

    public override toString: () => string = (): string => this.toCSSProperty();
}