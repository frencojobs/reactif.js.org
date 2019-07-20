# An Interactive Example

The best example in demonstrating the use of Reactif is calculating total from price and quantity. This way the user might know they can use it in table calculations, and also in updating the user interface instantly. Imagine your data object has calculated values within Releasers, and update(re-render) according to the changes fo values by associator. You can even create a spreadsheet.
The following is the example of a simple table created by Reacitf.
![reactif-spreadsheet](/spreadsheet.gif)

This is the data structure of the above spreadsheet, that is clean and understandable.

```javascript
let data = act(
  {
    price: 50,
    qty: 2,
    total: Releaser(self => self.price * self.qty),
    discount: 10,
    final: Discounted()
  },
  function(dep) {
    dep.common("set", function() {
      render();
    });
  }
);
```

## Logging value changes

Imagine a system that will log the change if a value is updated. If a property `x` of value 5 is updated to 10, the system will log something like that.

```bash
 X has changed its value from 5 to 10
```

You can do it in the least amount of code, by the help of Reactif,

```javascript
let data = act(
  {
    x: 5,
    y: 8
  },
  function(dep) {
    dep.common("set", function(target, prop) {
      let pastValue = dep.past(prop);
      let currentValue = target[prop];
      console.log(
        `${prop} has changed its value from ${pastValue} to ${currentValue}`
      );
    });
  }
);
```

## Updating interface changes

Assuming you have a function that will render the component given as argument, you can update only what should by doing like that.

```javascript
// render is a function that will render what should update
// render('button') will render the button element
let reactiveData = act({
    // ... data
},function(dep){
    dep.common('set',function(target,prop){
        // Compare target with rendered- virtual dom
        // then ...
        render(// what should re-render)
    })
})
```

## Without interpolaters

You can do exactly the same as you did with interpolaters without interpolaters. This is a need when you have to work with too much iterated calculation based values because _you can't use an interpolater inside an interpolater. An interpolater will see another one only as an object._ For example,

```javascript
act({
  price: 50,
  qty: 2,
  total: Releaser(self => self.price * self.qty),
  tax: 11,
  final: Releaser(self => self.total + self.tax)
});
```

The property will not return a value, instead, it will return a `NaN`. That it because if will see `self.total` as an object, not as a value returned interpolater.
To solve this you should create a new interpolater to calculate the final or use the associator to update it value, without being interpolated.
