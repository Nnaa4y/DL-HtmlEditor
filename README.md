# DL-HtmlEditor
A Drag & Leave based HTML Editor

---

Though it can be hard to understand my code structure. \
I'm gonna explain my code structure at this point

---
### `Double & Only Underscores`
You might see variables formatted like A__B or A_B      \
Like in the example:

```ts
class Example {
    public static readonly 
    Something_With_Only_Underscore: string 
        = 'something-with-only-underscore';  

    public static readonly 
    Something__With_Double_Underscore: string
        = 'something with-only-underscore';
}
```

### It basically means:
> You replace Only Underscores with '-'       \
> And replace Double Underscores with spaces


---
### Weird toString and toCSSProperty method definitions
You see, there is a bunch of `toString` and `toCSSProperty` in each file
and the way I'm writing it is, weird.

So let's just explain it.

```ts
class Example extends CSSProperty {
    public override toCSSProperty: () => string = () => super.toCSSProperty(this._name, this.Value);
    
    public override toString: () => string = () => this.toCSSProperty();
}
```
And yes, no one can understand anything from that. \
If you didn't understand something, lemme teach you 'bout that

`: () => string`                                   \
Means it's an 'Action'                             \
(which means does not store in the memory i dunno) \
that returns type 'string'.

`= () => super.toCSSProperty(this._name, this.Value);` \
Means that I created the 'Action'.                     \
And store it in the this.toCSSProperty()               \
`Good To Know: CSSProperty is the base class of all CSS Property classses`