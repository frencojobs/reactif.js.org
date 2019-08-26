# Using Interpolaters

From the [core concepts](/guide/concepts.html#interpolater), you probably would know what interplaters really are. They are rooted after getters/setters. They are run after the traps and they intercept the connection between the caller and value. You can add only one interpolater to a property, and this property will return the value after the function.

Remember that
You can't use an interpolater inside another interpolater. An interpolater will see another one only as an object.

## How to register

The best thing about interpolaters is that you can create you interpolater easily. You just have to call the `Interpolater` class. For example,

```javascript
import { Interpolater } from "reactif-core";

new Interpolater("upperCase", function(config) {
  return config.$$text.toUpperCase();
});
// Now you can use like that ..
let data = act({
  message: {
    $$type: "upperCase",
    $$text: "hello, world"
  }
});

data.message; // HELLO, WORLD
```

## Functions makes life easy

You'll see an object that will only return as a value but with verbose configurations makes things complex.
To solve this we can create a function that will pack with the configuration we need.

```javascript
function upperCase(text) {
  return {
    $$type: "upperCase",
    $$text: text
  };
}
// now with neatness
let data = act({
  message: upperCase("hello, world")
});
data.message; // HELLO, WORLD
```

## Access to object itself

The best thing about interpolaters is that they have access to the object itself. In the registeration of the interpolater, you have two parameter available, the first one is config and the second one is the object itself.

```javascript
// register a new interpolater
new Interpolater("SquareOfx", function(config, self) {
  // Here self is the object itself
  return !!self.x ? self.x * self.x : !!self.x;
});
```

This interpolater will check if the property `x` exists or not, if exists, it will return the square of x and if not, it will return a `false`. Try this with your reactif project.
