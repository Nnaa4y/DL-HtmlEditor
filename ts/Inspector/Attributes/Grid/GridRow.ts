import { CSSProperty  } from "../../CSSProperty.ts";
import { GridRowStart } from "./GridRowStart.ts";
import { GridRowEnd   } from "./GridRowEnd.ts";

export class GridRow extends CSSProperty {
    public static readonly Auto : string = 'auto / auto';

    private readonly _name      : string = 'grid-row';

    public StartValue           : GridRowStart = null;
    public EndValue             : GridRowEnd   = null;

    public constructor(start: GridRowStart, end: GridRowEnd) {
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