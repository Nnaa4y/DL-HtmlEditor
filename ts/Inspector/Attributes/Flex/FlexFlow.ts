// noinspection JSUnusedGlobalSymbols

import { CSSProperty } from "../../CSSProperty.ts";

export class FlexFlow extends CSSProperty {
    public static readonly Row                          : string = 'row';
    public static readonly Row_Reverse                  : string = 'row-reverse';
    public static readonly Column                       : string = 'column';
    public static readonly Column_Reverse               : string = 'column-reverse';

    public static readonly NoWrap                       : string = 'nowrap';
    public static readonly Wrap                         : string = 'wrap';
    public static readonly Wrap_Reverse                 : string = 'wrap-reverse';
    public static readonly Wrap__Balance                : string = 'wrap balance';
    public static readonly Balance__Wrap_Reverse        : string = 'balance wrap-reverse';

    public static readonly Row__NoWrap                  : string = 'row nowrap';
    public static readonly Column__Wrap                 : string = 'column wrap';
    public static readonly Column_Reverse__Wrap_Reverse : string = 'column-reverse wrap-reverse';
    public static readonly Row_Reverse__Balance__Wrap   : string = 'row-reverse balance wrap';

    private readonly _name: string = 'flex-flow';
    public           Value: string = CSSProperty.Unset;

    public constructor(val: string) {
        super();

        this.Value = val;
    }

    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value);

    public override toString: () => string = (): string => this.toCSSProperty();
}