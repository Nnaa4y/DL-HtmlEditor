import { CSSProperty } from '../../CSSProperty.ts'

export class FlexDirection extends CSSProperty {
    public static readonly Row            : string = 'row';
    public static readonly Row_Reverse    : string = 'row-reverse';
    public static readonly Column         : string = 'column';
    public static readonly Column_Reverse : string = 'column-reverse';

    private readonly _name : string = 'flex-direction';
    public           Value : string = CSSProperty.Unset;

    public constructor(value: string) {
        super();

        this.Value = value;
    }


    public override toCSSProperty(): string {
        return super.toCSSProperty(this._name, this.Value);
    }

    public override toString(): string {
        return this.toCSSProperty();
    }
}