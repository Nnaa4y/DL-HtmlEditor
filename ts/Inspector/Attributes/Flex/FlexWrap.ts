import { CSSProperty } from "../../CSSProperty.ts";

export class FlexWrap extends CSSProperty {
    public static readonly NoWrap                : string = 'nowrap';
    public static readonly Wrap                  : string = 'wrap';
    public static readonly Wrap_Reverse          : string = 'wrap-reverse';
    public static readonly Balance               : string = 'balance';
    public static readonly Wrap__Balance         : string = 'wrap balance';
    public static readonly Balance__Wrap_Reverse : string = 'balance wrap-reverse';

    private readonly _name : string = 'flex-wrap';
    public           Value : string = CSSProperty.Unset;

    public constructor(val: string) {
        super();

        this.Value = val;
    }


    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value);

    public override toString: () => string = (): string => this.toCSSProperty();
}