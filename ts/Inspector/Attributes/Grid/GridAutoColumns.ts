import { CSSProperty } from "../../CSSProperty.ts";

export class GridAutoColumns extends CSSProperty {
    private readonly       _name      : string = 'grid-auto-rows';

    public static readonly MinContent : string = 'min-content';
    public static readonly MaxContent : string = 'max-content';
    public static readonly Auto       : string = 'auto';

    public IntegerValue    : string = null;
    public PercentageValue : number = null; // '%'  removed
    public FlexValue       : number = null; // 'fr' removed
    public MinMaxValue     : string = null; // minmax($value, $value)
    public FitContentValue : string = null; // fit-content($value)

    public makeMinMax     (v1: string, v2: string): string { return `minmax(${v1}, ${v2})`; }
    public makeFitContent (v1: string, v2: string): string { return `fit-content(${v1}, ${v2})`; }

    public constructor(int: string, per: string, flex: string, minmax: string, fit_content: string) {
        super();

        if (int)
            this.IntegerValue = int;

        if (per)
            this.PercentageValue = parseFloat(per.replaceAll('%', ''));

        if (flex)
            this.FlexValue = parseFloat(flex.replaceAll('%', ''));

        if (minmax)
        {
            let pieces: string[] = minmax.split(',').toSpliced(2);

            for (let index: number = 0; index < pieces.length; index++)
                pieces[index] = pieces[index].trim();

            this.MinMaxValue = this.makeMinMax(pieces[0], pieces[1]);
        }

        if (fit_content)
        {
            let pieces: string[] = fit_content.split(',').toSpliced(2);

            for (let index: number = 0; index < pieces.length; index++)
                pieces[index] = pieces[index].trim();

            this.FitContentValue = this.makeFitContent(pieces[0], pieces[1]);
        }
    }

    public override toCSSProperty: () => string
        = (): string => super.toCSSProperty(
        this._name,
        `${this.IntegerValue    ? this.IntegerValue                       : '\b'} ` +
        `${this.PercentageValue ? this.PercentageValue.toString() + '%'   : '\b'} ` +
        `${this.FlexValue       ? this.FlexValue      .toString() + 'fr' : '\b'} ` +
        `${this.MinMaxValue     ? this.MinMaxValue                        : '\b'} ` +
        `${this.FitContentValue ? this.FitContentValue                    : '\b'}`
    );

    public override toString: () => string = (): string => this.toCSSProperty();
}