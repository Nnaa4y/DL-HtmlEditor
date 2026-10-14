import { CSSProperty } from "../../CSSProperty.ts";

export class FlexLineCount extends CSSProperty {
    private readonly _name: string = 'flex-line-count';
    public           Value: number = 0.0;

    public constructor(val: number) {
        super();

        this.Value = val;
    }


    public override toCSSProperty: () => string = (): string => super.toCSSProperty(this._name, this.Value.toString());

    public override toString: () => string = (): string => this.toCSSProperty();
}