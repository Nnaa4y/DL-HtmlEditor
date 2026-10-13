import { CSSProperty } from "../../CSSProperty.ts";

export class FlexShrink extends CSSProperty {
    // no need to use separate variables
    // flex-shrink uses value ranged between 0 and 2
    private readonly _name: string = 'flex-shrink';
    public           Value: number = 0.0;

    public constructor(val: number) {
        super();

        this.Value = val;
    }

    // don't care if this.Value is greater than 2 or less than 0
    public override toCSSProperty(): string {
        return super.toCSSProperty(this._name, this.Value.toString());
    }

    public override toString(): string {
        return this.toCSSProperty();
    }
}