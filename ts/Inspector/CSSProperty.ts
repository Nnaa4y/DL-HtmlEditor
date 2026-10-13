// base class for every CSS property
export class CSSProperty {
    public static readonly Inherit      : string = 'inherit';
    public static readonly Initial      : string = 'initial';
    public static readonly Revert       : string = 'revert';
    public static readonly Revert_Layer : string = 'revert_layer';
    public static readonly Unset        : string = 'unset';

    // returns '${name}: ${value};'
    toCSSProperty(name: string, value: string): string {
        return `${name}: ${value};`;
    }
}