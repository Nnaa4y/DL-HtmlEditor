import { CSSProperty } from "../../CSSProperty.ts";

export class GridAutoFlow extends CSSProperty {
    public static readonly Row           : string = 'row';
    public static readonly Column        : string = 'column';
    public static readonly Dense         : string = 'dense';
    public static readonly Row__Dense    : string = 'row dense';
    public static readonly Column__Dense : string = 'column dense';

    private readonly _name: string = 'grid-auto-flow';
    public           Value: string;

    public constructor(val: string) {
        super();

        this.Value = val;
    }

    public override toCSSProperty: () => string
        = (): string => super.toCSSProperty(
            this._name,
            this.Value
    );

    public override toString: () => string = (): string => this.toCSSProperty();
}