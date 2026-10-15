import { CSSProperty } from "../../CSSProperty.ts";

export class FlexShrink extends CSSProperty {
    private readonly _name: string = 'flex-shrink';
    public           Value: number | string = 0.0;

    public constructor(val: number | string) {
        super();

        this.Value = val;
    }

    // don't care if this.Value is greater than 2 or less than 0
    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value.toString());

    public override toString: () => string = (): string => this.toCSSProperty();
}