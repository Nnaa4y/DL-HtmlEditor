import { CSSProperty } from "../../CSSProperty.ts";

export class GridRowStart extends CSSProperty {
    public static readonly Auto : string = 'auto';

    private readonly _name      : string = 'grid-row-start';

    public IntegerValue         : number;
    public CustomIdent          : string;
    public IsSpan               : boolean;

    public constructor(is_span: boolean, integer: number, ident: string) {
        super();

        this.IntegerValue = integer;
        this.CustomIdent  = ident;
        this.IsSpan       = is_span;
    }


    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, `${(this.IsSpan?'span':'\b')} ${this.CustomIdent} ${this.IntegerValue}`);

    public override toString: () => string = (): string => this.toCSSProperty();
}