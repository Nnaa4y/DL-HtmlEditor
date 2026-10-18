import { CSSProperty     } from "../../CSSProperty.ts";
import { GridRowStart    } from "./GridRowStart.ts";
import { GridColumnStart } from "./GridColumnStart.ts";
import { GridRowEnd      } from "./GridRowEnd.ts";
import { GridColumnEnd   } from "./GridColumnEnd.ts";

export class GridArea extends CSSProperty {
    public static readonly Auto : string = 'auto / auto / auto / auto';

    private readonly      _name : string = 'grid-area';

    public RowStartValue        : GridRowStart    = null;
    public ColumnStartValue     : GridColumnStart = null;
    public RowEndValue          : GridRowEnd      = null;
    public ColumnEndValue       : GridColumnEnd   = null;

    public constructor(row_start: GridRowStart, column_start: GridColumnStart, row_end: GridRowEnd, column_end: GridColumnEnd) {
        super();

        this.RowStartValue    = row_start;
        this.ColumnStartValue = column_start;
        this.RowEndValue      = row_end;
        this.ColumnEndValue   = column_end;
    }

    public override toCSSProperty:
        () => string
    = (): string =>
        super.toCSSProperty(
            this._name,
            `${this.RowStartValue.getValues()} `    + `/ ` +
            `${this.ColumnStartValue.getValues()} ` + `/ ` +
            `${this.RowEndValue.getValues()} `      + `/ ` +
            `${this.ColumnEndValue.getValues()}`
        );

    public override toString: () => string = (): string => this.toCSSProperty();
}