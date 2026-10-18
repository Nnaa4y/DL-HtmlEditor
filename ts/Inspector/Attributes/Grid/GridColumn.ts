import { CSSProperty     } from "../../CSSProperty.ts";
import { GridColumnStart } from "./GridColumnStart.ts";
import { GridColumnEnd   } from "./GridColumnEnd.ts";

export class GridRow extends CSSProperty {
    public static readonly Auto : string = 'auto / auto';

    private readonly _name      : string = 'grid-row';

    public StartValue           : GridColumnStart = null;
    public EndValue             : GridColumnEnd   = null;

    public constructor(start: GridColumnStart, end: GridColumnEnd) {
        super();

        this.StartValue = start;
        this.EndValue = end;
    }

    public override toCSSProperty:
        () => string
        = (): string =>
        super.toCSSProperty(
            this._name,
            `${this.StartValue ? this.StartValue.getValues() : '\b'} / ${this.EndValue ? this.EndValue.getValues() : '\b'}`
        );

    public override toString: () => string = (): string => this.toCSSProperty();
}