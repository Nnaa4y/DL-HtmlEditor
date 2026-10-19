import { CSSProperty } from "../../CSSProperty.ts";

// read about grid-template-rows from 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-rows'
export class GridTemplateRows extends CSSProperty {
    public static readonly None: string = 'none';

    public LengthValue     : string  = null; // 50px, 10cm, etc.
    public FlexValue       : string  = null; // without 'fr'
    public MinMaxValue     : string  = null;
    public FitContentValue : string  = null;
    public RepeatValue     : string  = null;
    public IsSubgrid       : boolean = false;

    private readonly _name : string = 'grid-template-rows';

    /*
    I don't get how [line-name$] is used
    as I read from MDN, it means I can use line names but what the heck is that.
    I won't be using that thingy
    */

    public makeMinMax    (v1: string, v2: string ): string { return `minmax(${v1}, ${v2})`; }
    public makeFitContent(v1: string, v2: string ): string { return `fit-content(${v1}, ${v2})`; }
    public makeRepeat    (v1: string, v2?: string): string { return `repeat(${v1} ${v2 ? `, ${v2}` : '\b'})`; }

    public constructor(length: string, flex: string, minmax: string, fit_content: string, repeat: string, is_subgrid: boolean) {
        super();

        if (length) this.LengthValue = length;
        if (flex)   this.FlexValue   = flex.replaceAll('fr', '');

        if (minmax)
        {
            let pieces: string[] = minmax.split(',').toSpliced(2);
            for (let i: number = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();

            this.MinMaxValue = this.makeMinMax(pieces[0], pieces[1]);
        }

        if (fit_content)
        {
            let pieces: string[] = fit_content.split(',').toSpliced(2);
            for (let i: number = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();

            this.FitContentValue = this.makeMinMax(pieces[0], pieces[1]);
        }

        if (repeat)
        {
            // aValue bValue
            let pieces: string[] = repeat.split(',').toSpliced(2);
            for (let i: number = 0; i < pieces.length; i++)
                pieces[i] = pieces[i].trim();

            if (pieces.length == 2)
                this.RepeatValue = this.makeRepeat(pieces[0], pieces[1]);

            else
                this.RepeatValue = this.makeRepeat(pieces[0], null);
        }

        this.IsSubgrid = is_subgrid;
    }

    public getValues(): string {
        return (
            this.IsSubgrid ?
                'subgrid'
                :
                `${this.LengthValue     ? this.LengthValue                        : '\b'} ` +
                `${this.FlexValue       ? this.FlexValue      .toString() + 'fr'  : '\b'} ` +
                `${this.MinMaxValue     ? this.MinMaxValue                        : '\b'} ` +
                `${this.FitContentValue ? this.FitContentValue                    : '\b'} ` +
                `${this.RepeatValue     ? this.RepeatValue                        : '\b'}`
        );
    }

    public override toCSSProperty: () => string
        = (): string => super.toCSSProperty(this._name, this.getValues());

    public override toString: () => string = (): string => this.toCSSProperty();
}

let rows: GridTemplateRows = new GridTemplateRows('100px', '2fr', null, null, '5, 2fr', false);
console.log(rows.toString());