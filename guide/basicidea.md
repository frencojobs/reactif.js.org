# Basic Ideas

To recover the basic ideas of Reactif, it would be the best if we think it in a way of comparing with the vanilla javascript. What would be the usefulness of a complex idea, if implementing it in the original way is more effective, clean and easy.
Firstly, we need to clarify the idea of what really reactive-ness is. Why is everyone is talking about it? Is it difficult, or complicated? Well, actually the basic idea is very simple. A reactive property is a property with a tracker on it. We can track it's changes, and update the dependency properties of it according to it's changes. Here, what the word **change** really means is, getting and setting values (and probably deleting values). Now we know the basic idea, so how can we implement it in javascript?

## Getting values

In ECMAscript, it is easy to track changes of an object the way I mentioned, by the helps of ES5 getters and setters. They actually do not allow you to track properties, but allow you to insert the functions that can be called before performing a certain operation like returning a value (getting), or changing a value (setting). It is like,

```javascript
console.log(data.x);
/** 
--> x is called as getter 
--> run the functions
--> return x
*/
```

We can implement a getter work like the example above,

```javascript
let data = { x: "some value" };
Object.defineProperty(data, "x", {
  get: function() {
    // We can inject our functions here
    // They will work before
    // returning the value
    return data["x"];
  }
});
```

But the problem is how will we do the same on very large objects with a lot of data complexity. Should we do the same methods on every property? To keep our code DRY, we can't do repeating the same steps on every count. Well, there is a solution.

```javascript
let data = {x: 'some value', // ... many properites}
Object.keys(data).forEach(key =>{
    Object.defineProperty(data,key,{
        get: function(){
        // We can inject our functions here
        // They will work before
        // returning the value
        return data[key]
        }
    })
})
```

The problem is solved, why would we need **Reacitf**. Try to define getters that work differently based on the property called, like Piecewise Functions. Will you repeat, or will you use switch statement in the above example.

```javascript
let data = { x: "some value", y: "another value" };
Object.keys(data).forEach(key => {
  Object.defineProperty(data, key, {
    get: function() {
      switch (key) {
        case "x":
          // Run a function
          break;
        case "y":
        // Run another different function
      }
      return data[key];
    }
  });
});
```

As you can see, the more functionalities you need, the more complexities and less maintainability will take place. Will Reactif be a better solution? This is the above example implemented by Reactif.

```javascript
let data = { x: "some value", y: "another value" };

data = act(data, function(dep) {
  dep.get("x", function() {
    // Run a function
  });
  dep.get("y", function() {
    // Run another different function
  });
});
```

## Setting values

You can define setters the same way you did with the getters. To solve the same problems you've faced while with getters, Reactif also offers you a method 'set', that will work as setter. There is only a difference with getters. In getters, the functions you defined worked before the value is returned. But in setters, the functions you defined will work only after the value is setted. I do not think there should be a reason you want your functions to work before the value is changed, without using the getter functions.

```javascript
let data = { cat: "some value", dog: "another value" };

data = act(data, function(dep) {
  dep.set("cat", function() {
    console.log("Meow");
  });
  dep.set("dog", function() {
    console.log("Woof");
  });
});

data.cat = ""; // Logged 'Meow'
data.dog = ""; // Logged 'Woof'
```

## Deleting values

Hoping that you might know `DEL` stands for delete, and because `delete` is a reserved keyword in javascript, you can do pretty much the same as the way you did with getter/setters. But this will not be supported in old browser in which Proxy is not supported.

```javascript
let data = { num: 0 };

data = act(data, function(dep) {
  dep.del("num", function() {
    console.log("Deleted the property num successfully!");
  });
});

delete data.num; // Logged 'Deleted the property num successfully!'
```

You might want to know why the description of the library said `Proxy` while you still can't know what really Proxy is. We will cover why we use proxy instead of 'getters/setters' in the next section.

## Common

If you are wondering how to define a trap that will work for all properties in an object, I would love to give you a point for that. That's great. You do not have to define many traps, because that will not work for the added props outside of object.

```javascript
let data = act({
    x: 'some value',
    y: 'another value'
},function(dep){
    dep.set('x',function(){
        console.log('Abaracadabra!')
    })
    dep.set('y',function(){
        console.log('Abaracadabra!')
    })
})
data.z = 'a value'
// console.log('Abaracadabra!') will not work for z
// This is not a proper way to define common traps
// You must use common.

function(dep){
    dep.common('set',function(){
        console.log('Abaracadabra!')
    })
}
```

## Adding a new Property

Common functions will not work for all new elements if your browser does not support `Proxy`. To solve this you must use `dep.add` method to add new property. The problem about this is that this function is available only in the associator. So, you should use an Observable in the associator and that would be fine.
