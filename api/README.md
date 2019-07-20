## Associator

- **Type**: Function
- **Required**: true

An associator is a function that is the second parameter of the the main `act` function. It allows user to set methods in the traps (getters/setters). It is called associator be because it allows user defined methods to associate with the actual data.

## Interpolater

- **Type**: Object
- **Required**: false

Not to be confused with the class `Interpolater`, this is the definition of the term interpolater. The class is used to register the actual interpolaters. They interpolate the value before returning the actual value, simply they modified the values.

## Target

- **Type**: Object

Target is the object that will be handled by the proxy or the object that is handle by the proxy( or getters/setters). You can consume the original target by consuming the first argument of the associator functions, or just by callin the this object in those functions.

- **Example**:

```javascript
act(
  {
    x: "some value"
  },
  function(dep) {
    dep.common("set", function(target, prop) {
      target[prop] == this[prop]; // true
    });
  }
);
```

## Prop

- **Type**: Primitive Types

Prop stands for property. The property of an object, [target](#target).

## Trap

- **Type**: Function

Traps are functions that will work based on the call to a prop. Traps like getters return a value, the actual value, and setters change the value to a new value. The object will return those functions running instead of the values.
