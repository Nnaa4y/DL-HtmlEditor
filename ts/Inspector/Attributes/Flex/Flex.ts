import { CSSProperty } from "../../CSSProperty.ts";
import { FlexShrink  } from "./FlexShrink.ts";
import { FlexGrow    } from "./FlexGrow.ts";
import {FlexBasis} from "./FlexBasis.ts";

export class Flex extends CSSProperty {
    public static readonly None: '0 0 auto';

    public static readonly MaxContent : string = '1 1 max-content';
    public static readonly MinContent : string = '1 1 min-content';
    public static readonly FitContent : string = '1 1 fit-content';

    public static readonly Content    : string = '1 1 content';

    private readonly _name     : string = 'flex';
    public Value__Flex_Grow   : FlexGrow  ;
    public Value__Flex_Shrink : FlexShrink;
    public Value__Flex_Basis  : FlexBasis ;

    public constructor(flex_grow: FlexGrow, flex_shrink: FlexShrink, flex_basis: FlexBasis) {
        super();

        this.Value__Flex_Grow   = flex_grow;
        this.Value__Flex_Shrink = flex_shrink;
        this.Value__Flex_Basis  = flex_basis;
    }


    public override toCSSProperty:
        () => string
    = (): string => super.toCSSProperty(this._name, `${this.Value__Flex_Grow.Value} ${this.Value__Flex_Shrink.Value} ${this.Value__Flex_Basis.Value}`);

    public override toString: () => string = (): string => this.toCSSProperty();
}