# What is Reactif?

Reactif is a javascript library that helps you to interpolate easily through the objects' property getters and setters by proxying. It simply gives you the power of reactivity by allowing you to do that. It doesn't help you to work through the functional reactive programming, but turns objects into reactive ones, and itself is implemented by **functional reactive programming**'s core heart Observer Pattern.

Before that,
We will assume you as you already know the basics of javascript background and web development. If not, you should go back and learn the basics, then, come back.

# A simple Example

Assuming as you want a property `total`, that changes according to the properties `price` and `quantity`. How would you do that in vanilla (plain) javascript? Well, I don't know but what I can show you is how you can implement it by Reactif.

```javascript
import { act, Releaser } from "reactif-core";

let sales = act({
    price: 5,
    quantity: 2,
    total: Releaser(self => self.price * self.quantity)
  });

sales.total; // 10
sales.price = 10;
sales.total; // 20
```

Pretty Cool, Huh?
There's more and I would love to show you everything interesting. Just keep reading.
