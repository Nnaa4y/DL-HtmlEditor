import { CSSProperty } from "../../CSSProperty.ts";

export class GridTemplateAreas extends CSSProperty {

    private readonly _name: string = 'grid-template-areas';
    /*
    you will enter the name of areas

    example:               \
    [                      \
        [ 'a', 'a', 'a' ], \
        [ 'b', 'c', 'c' ], \
        [ 'b', 'c', '.' ]  \
    ]

    '.' for null areas
    */
    public Areas: string[][];

    public constructor(areas: string[][]) {
        super();

        this.Areas = areas;
    }

    public getValues(): string {
        return (
            (): string => {
                // join ' '  (inner list)
                // join '\n\t' (outer list)

                let tmp: string = '';
                let res: string = '';
                this.Areas.forEach(
                    (tmpAreas: string[]): void => {
                        res = res.concat('\n\t');
                        tmp = tmp.concat('\"');

                        tmpAreas.forEach((area: string): string => tmp = tmp.concat(area, ' '));

                        tmp = tmp.concat('\b\"');
                        res = res.concat(tmp);

                        tmp = '';
                    }
                )

                return res;
            }
        )() // unnamed action callback
    }

    public override toCSSProperty: () => string
        = (): string => super.toCSSProperty(
            this._name,
            this.getValues()
    ); // toCSSProperty

    public override toString: () => string = (): string => this.toCSSProperty();
}