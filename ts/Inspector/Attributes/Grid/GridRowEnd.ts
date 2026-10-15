import { CSSProperty } from "../../CSSProperty.ts";

export class GridRowEnd extends CSSProperty {
    public static readonly Auto : string = 'auto';

    private readonly _name      : string = 'grid-row-end';

    public IntegerValue         : number  = null;
    public CustomIdent          : string  = null;
    public IsSpan               : boolean = false;

    public constructor(is_span: boolean, integer: number, ident: string) {
        super();

        this.IntegerValue = integer;
        this.CustomIdent  = ident;
        this.IsSpan       = is_span;
    }


    public override toCSSProperty:
        () => string
        = (): string => super.toCSSProperty(
        this._name,
        `${(this.IsSpan      ? 'span'            : '\b')} ` +
        `${this.CustomIdent  ? this.CustomIdent  : '\b' } ` +
        `${this.IntegerValue ? this.IntegerValue : '\b'}`
    );

    public override toString: () => string = (): string => this.toCSSProperty();
}