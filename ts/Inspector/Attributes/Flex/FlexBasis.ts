import { CSSProperty } from "../../CSSProperty.ts";

export class FlexBasis extends CSSProperty {
    public static readonly MaxContent : string = 'max-content';
    public static readonly MinContent : string = 'min-content';
    public static readonly FitContent : string = 'fit-content';

    public static readonly Content    : string = 'content';

    private readonly _name: string = 'flex-basis';
    public           Value: string = CSSProperty.Unset;

    public constructor(val: string) {
        super();

        this.Value = val;
    }


    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value);

    public override toString: () => string = (): string => this.toCSSProperty();
}